
import { GoogleGenAI, Type } from "@google/genai";
import type { MenuItem, OrderItem, GeminiResponse, MenuModifier } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
      action: {
        type: Type.STRING,
        description: "Tindakan yang akan dilakukan. Bisa berupa 'UPDATE_ORDER', 'CALCULATE_BILL', 'CONFIRMATION', 'ERROR', atau 'CLEAR_ORDER' jika pengguna menyelesaikan pembayaran."
      },
      message: {
        type: Type.STRING,
        description: "Pesan konfirmasi atau klarifikasi yang ramah dan dapat dibaca manusia untuk pelayan."
      },
      updatedOrder: {
        type: Type.ARRAY,
        description: "Daftar item pesanan yang lengkap dan diperbarui untuk meja. HANYA ada untuk tindakan 'UPDATE_ORDER'. Sertakan semua item sebelumnya ditambah item baru/yang dimodifikasi.",
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Nama item menu. Harus sama persis dengan yang ada di menu." },
            quantity: { type: Type.INTEGER },
            notes: { type: Type.STRING, description: "Catatan opsional seperti 'medium', 'matang', atau 'tanpa es'. Defaultnya adalah string kosong." },
            price: { type: Type.NUMBER, description: "Harga per item, diambil dari menu." }
          },
          required: ["name", "quantity", "price", "notes"]
        }
      },
    },
    required: ["action", "message"]
};

export const processWaiterCommand = async (
    menu: MenuItem[], 
    modifiers: MenuModifier[],
    currentOrder: OrderItem[], 
    userInput: string,
    tableId: number
): Promise<GeminiResponse> => {
    
    const prompt = `
    Anda adalah asisten AI untuk pelayan restoran yang mengelola pesanan untuk Meja ${tableId}. Tugas Anda adalah memproses perintah dan mengelola pesanan meja.

    **Aturan:**
    1.  Hanya tambahkan item yang ada di menu yang disediakan.
    2.  Jika item tidak ada di menu, tanggapi dengan tindakan 'ERROR' dan pesan yang menjelaskan item tersebut tidak tersedia.
    3.  Saat memperbarui pesanan ('UPDATE_ORDER'), Anda HARUS mengembalikan *seluruh* daftar pesanan baru, termasuk semua item sebelumnya dan yang baru. Jangan hanya mengembalikan item baru.
    4.  Jika pengguna meminta untuk menghapus item, perbarui pesanan dan hapus dari daftar. Jika tidak ada dalam daftar, beri tahu mereka.
    5.  Saat menghitung tagihan, daftar item dan harga totalnya di bidang 'message' dan gunakan tindakan 'CALCULATE_BILL'.
    6.  Jika pengguna mengatakan pembayaran selesai atau meminta untuk menutup pesanan, gunakan tindakan 'CLEAR_ORDER'.
    7.  Selalu cocokkan nama item persis dari menu.
    8.  Ekstrak permintaan khusus (misalnya, 'medium', 'matang', 'tanpa gula') dan masukkan ke dalam bidang 'notes'.
    9.  Jika perintah tidak jelas, minta klarifikasi dengan tindakan 'CONFIRMATION'.
    10. Tangani juga opsi tambahan (modifier) seperti 'Pakai Susu'. Jika pengguna meminta tambahan, tambahkan ke bidang 'notes' dari item yang relevan. Jangan ubah harga item secara otomatis berdasarkan modifier, cukup catat permintaannya di notes.

    **Menu yang Tersedia (dengan subkategori):**
    ${JSON.stringify(menu, null, 2)}

    **Opsi Tambahan (Modifiers) yang Tersedia:**
    ${JSON.stringify(modifiers, null, 2)}

    **Pesanan Saat Ini untuk Meja ${tableId}:**
    ${JSON.stringify(currentOrder, null, 2)}

    **Perintah Pelayan:**
    "${userInput}"

    Proses perintah dan kembalikan objek JSON sesuai dengan skema yang ditentukan.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.2
            },
        });

        const jsonText = response.text.trim();
        const parsedResponse: GeminiResponse = JSON.parse(jsonText);
        return parsedResponse;
    } catch(e) {
        console.error("Gemini API call failed:", e);
        return {
            action: 'ERROR',
            message: "Saya kesulitan memahami itu. Bisakah Anda mengulanginya?"
        };
    }
};
