
import type { MenuItem, MenuModifier } from './types';

// Data Menu Utama
export const MENU: MenuItem[] = [
  // ROBUSTA
  { id: 'rob-1', name: 'Kopi Hitam Panas', price: 6000, category: 'Minuman', subCategory: 'Robusta', description: 'Kopi Robusta hitam panas.' },
  { id: 'rob-2', name: 'Kopi Hitam Dingin', price: 10000, category: 'Minuman', subCategory: 'Robusta', description: 'Kopi Robusta hitam dingin.' },
  { id: 'rob-3', name: 'Sanger Panas', price: 8000, category: 'Minuman', subCategory: 'Robusta', description: 'Sanger Robusta panas.' },
  { id: 'rob-4', name: 'Sanger Dingin', price: 12000, category: 'Minuman', subCategory: 'Robusta', description: 'Sanger Robusta dingin.' },
  { id: 'rob-5', name: 'Kopi Susu Panas', price: 10000, category: 'Minuman', subCategory: 'Robusta', description: 'Kopi susu Robusta panas.' },
  { id: 'rob-6', name: 'Kopi Susu Dingin', price: 13000, category: 'Minuman', subCategory: 'Robusta', description: 'Kopi susu Robusta dingin.' },
  { id: 'rob-7', name: 'Susu Panas', price: 7000, category: 'Minuman', subCategory: 'Robusta', description: 'Susu panas/hangat.' },
  { id: 'rob-8', name: 'Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Robusta', description: 'Susu dingin.' },
  { id: 'rob-9', name: 'Telur 1/2 Matang (1)', price: 6000, category: 'Makanan Ringan', subCategory: 'Robusta', description: 'Satu telur setengah matang.' },
  { id: 'rob-10', name: 'Telur 1/2 Matang (2)', price: 12000, category: 'Makanan Ringan', subCategory: 'Robusta', description: 'Dua telur setengah matang.' },
  { id: 'rob-11', name: 'Coklat Original Panas', price: 12000, category: 'Minuman', subCategory: 'Robusta', description: 'Coklat original panas.' },
  { id: 'rob-12', name: 'Coklat Original Dingin', price: 15000, category: 'Minuman', subCategory: 'Robusta', description: 'Coklat original dingin.' },
  { id: 'rob-13', name: 'Kopi Coklat Panas', price: 15000, category: 'Minuman', subCategory: 'Robusta', description: 'Kopi coklat panas.' },
  { id: 'rob-14', name: 'Kopi Coklat Dingin', price: 18000, category: 'Minuman', subCategory: 'Robusta', description: 'Kopi coklat dingin.' },
  { id: 'rob-15', name: 'Kopi Kurma Dingin', price: 17000, category: 'Minuman', subCategory: 'Robusta', description: 'Kopi dengan kurma, disajikan dingin.' },
  { id: 'rob-16', name: 'Ice Kopi Jelly Dingin', price: 15000, category: 'Minuman', subCategory: 'Robusta', description: 'Es kopi dengan jelly.' },
  { id: 'rob-17', name: 'Es Kosong', price: 2000, category: 'Minuman', subCategory: 'Robusta', description: 'Es batu saja.' },
  { id: 'rob-18', name: 'Air Mineral', price: 5000, category: 'Minuman', subCategory: 'Robusta', description: 'Air mineral botol.' },

  // ARABICA
  { id: 'ara-1', name: 'Sanger Espreso Panas', price: 17000, category: 'Minuman', subCategory: 'Arabica', description: 'Sanger Arabica espresso panas.' },
  { id: 'ara-2', name: 'Sanger Espreso Dingin', price: 20000, category: 'Minuman', subCategory: 'Arabica', description: 'Sanger Arabica espresso dingin.' },
  { id: 'ara-3', name: 'Espreso Panas', price: 15000, category: 'Minuman', subCategory: 'Arabica', description: 'Espresso Arabica panas.' },
  { id: 'ara-4', name: 'Espreso Double', price: 25000, category: 'Minuman', subCategory: 'Arabica', description: 'Double shot espresso Arabica.' },
  { id: 'ara-5', name: 'Americano Panas', price: 15000, category: 'Minuman', subCategory: 'Arabica', description: 'Americano Arabica panas.' },
  { id: 'ara-6', name: 'Americano Dingin', price: 20000, category: 'Minuman', subCategory: 'Arabica', description: 'Americano Arabica dingin.' },

  // KOPI KHOP
  { id: 'khop-1', name: 'Kopi Khop Panas', price: 10000, category: 'Minuman', subCategory: 'Kopi Khop', description: 'Kopi Khop panas.' },
  { id: 'khop-2', name: 'Kopi Khop Dingin', price: 13000, category: 'Minuman', subCategory: 'Kopi Khop', description: 'Kopi Khop dingin.' },
  { id: 'khop-3', name: 'Kopi Khop Susu Panas', price: 15000, category: 'Minuman', subCategory: 'Kopi Khop', description: 'Kopi Khop susu panas.' },
  { id: 'khop-4', name: 'Kopi Khop Susu Dingin', price: 18000, category: 'Minuman', subCategory: 'Kopi Khop', description: 'Kopi Khop susu dingin.' },

  // BOH MANOK WENG
  { id: 'bmw-1', name: 'Boh Manok Weng Coklat Original', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa coklat original.' },
  { id: 'bmw-2', name: 'Boh Manok Weng Beng-Beng', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa Beng-Beng.' },
  { id: 'bmw-3', name: 'Boh Manok Weng Capucino', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa Capucino.' },
  { id: 'bmw-4', name: 'Boh Manok Weng Milo', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa Milo.' },
  { id: 'bmw-5', name: 'Boh Manok Weng Cofimik', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa Cofimix.' },
  { id: 'bmw-6', name: 'Boh Manok Weng Susu', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa susu.' },
  { id: 'bmw-7', name: 'Boh Manok Weng Kopi', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa kopi.' },
  { id: 'bmw-8', name: 'Boh Manok Weng Teh', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa teh.' },
  { id: 'bmw-9', name: 'Boh Manok Weng Teh Hijau', price: 15000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok rasa teh hijau.' },
  { id: 'bmw-10', name: 'Boh Manok Weng Pineung Nyen', price: 18000, category: 'Minuman', subCategory: 'Boh Manok Weng', description: 'Minuman telur kocok spesial Pineung Nyen.' },

  // LEMON TEA
  { id: 'lt-1', name: 'Lemon Tea Panas', price: 10000, category: 'Minuman', subCategory: 'Lemon Tea', description: 'Teh lemon panas/hangat.' },
  { id: 'lt-2', name: 'Lemon Tea Dingin', price: 15000, category: 'Minuman', subCategory: 'Lemon Tea', description: 'Es teh lemon.' },
  { id: 'lt-3', name: 'Lemon Tea Madu Panas', price: 15000, category: 'Minuman', subCategory: 'Lemon Tea', description: 'Teh lemon madu panas.' },
  { id: 'lt-4', name: 'Lemon Tea Madu Dingin', price: 18000, category: 'Minuman', subCategory: 'Lemon Tea', description: 'Es teh lemon madu.' },
  { id: 'lt-5', name: 'Lemon Panas', price: 8000, category: 'Minuman', subCategory: 'Lemon Tea', description: 'Air lemon panas.' },
  { id: 'lt-6', name: 'Lemon Dingin', price: 12000, category: 'Minuman', subCategory: 'Lemon Tea', description: 'Es lemon.' },

  // TEH
  { id: 'teh-1', name: 'Teh Panas', price: 5000, category: 'Minuman', subCategory: 'Teh', description: 'Teh panas/hangat.' },
  { id: 'teh-2', name: 'Teh Dingin', price: 7000, category: 'Minuman', subCategory: 'Teh', description: 'Es teh.' },
  { id: 'teh-3', name: 'Teh Hijau Panas', price: 6000, category: 'Minuman', subCategory: 'Teh', description: 'Teh hijau panas/hangat.' },
  { id: 'teh-4', name: 'Teh Hijau Dingin', price: 8000, category: 'Minuman', subCategory: 'Teh', description: 'Es teh hijau.' },
  { id: 'teh-5', name: 'Teh Tarik Hijau Panas', price: 10000, category: 'Minuman', subCategory: 'Teh', description: 'Teh tarik hijau panas/hangat.' },
  { id: 'teh-6', name: 'Teh Tarik Hijau Dingin', price: 13000, category: 'Minuman', subCategory: 'Teh', description: 'Es teh tarik hijau.' },
  { id: 'teh-7', name: 'Teh Tarik Panas', price: 12000, category: 'Minuman', subCategory: 'Teh', description: 'Teh tarik panas/hangat.' },
  { id: 'teh-8', name: 'Teh Tarik Dingin', price: 15000, category: 'Minuman', subCategory: 'Teh', description: 'Es teh tarik.' },

  // SACHET
  { id: 'sach-1', name: 'Capucino Panas', price: 7000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Capucino panas/hangat.' },
  { id: 'sach-2', name: 'Capucino Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Capucino dingin.' },
  { id: 'sach-3', name: 'Capucino Susu Panas', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Capucino susu panas/hangat.' },
  { id: 'sach-4', name: 'Capucino Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Capucino susu dingin.' },
  { id: 'sach-5', name: 'Capucino Cincau Dingin', price: 15000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Capucino dengan cincau.' },
  { id: 'sach-6', name: 'Milo Panas', price: 6000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Milo panas/hangat.' },
  { id: 'sach-7', name: 'Milo Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Milo dingin.' },
  { id: 'sach-8', name: 'Milo Susu Panas', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Milo susu panas/hangat.' },
  { id: 'sach-9', name: 'Milo Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Milo susu dingin.' },
  { id: 'sach-10', name: 'Cofimix Panas', price: 6000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Cofimix panas/hangat.' },
  { id: 'sach-11', name: 'Cofimix Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Cofimix dingin.' },
  { id: 'sach-12', name: 'Cofimix Susu Panas', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Cofimix susu panas/hangat.' },
  { id: 'sach-13', name: 'Cofimix Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Cofimix susu dingin.' },
  { id: 'sach-14', name: 'Luwak Panas', price: 6000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Luwak panas/hangat.' },
  { id: 'sach-15', name: 'Luwak Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Luwak dingin.' },
  { id: 'sach-16', name: 'Luwak Susu Panas', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Luwak susu panas/hangat.' },
  { id: 'sach-17', name: 'Luwak Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Luwak susu dingin.' },
  { id: 'sach-18', name: 'Nutrisari Panas', price: 6000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Nutrisari panas/hangat.' },
  { id: 'sach-19', name: 'Nutrisari Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Nutrisari dingin.' },
  { id: 'sach-20', name: 'Nutrisari Susu Panas', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Nutrisari susu panas/hangat.' },
  { id: 'sach-21', name: 'Nutrisari Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Nutrisari susu dingin.' },
  { id: 'sach-22', name: 'Beng-beng Susu Panas', price: 6000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Beng-beng susu panas/hangat.' },
  { id: 'sach-23', name: 'Beng-beng Susu Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Beng-beng susu dingin.' },
  { id: 'sach-24', name: 'Kukubima Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman energi Kukubima dingin.' },
  { id: 'sach-25', name: 'Kukubima Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman energi Kukubima susu dingin.' },
  { id: 'sach-26', name: 'Extra Joss Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman energi Extra Joss dingin.' },
  { id: 'sach-27', name: 'Extra Joss Susu Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman energi Extra Joss susu dingin.' },
  { id: 'sach-28', name: 'Hemaviton Dingin', price: 10000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman energi Hemaviton dingin.' },
  { id: 'sach-29', name: 'Energen Panas', price: 6000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sereal Energen panas.' },
  { id: 'sach-30', name: 'Energen Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sereal Energen dingin.' },
  { id: 'sach-31', name: 'Chocolatos Panas', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Chocolatos panas/hangat.' },
  { id: 'sach-32', name: 'Chocolatos Dingin', price: 8000, category: 'Minuman', subCategory: 'Sachet', description: 'Minuman sachet Chocolatos dingin.' },

  // JUS
  { id: 'jus-1', name: 'Jus Alpukat', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus buah alpukat segar.' },
  { id: 'jus-2', name: 'Jus Mangga', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus buah mangga segar.' },
  { id: 'jus-3', name: 'Jus Jeruk', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus buah jeruk segar.' },
  { id: 'jus-4', name: 'Jus Wortel', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus wortel segar.' },
  { id: 'jus-5', name: 'Jus Guava', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus jambu biji segar.' },
  { id: 'jus-6', name: 'Jus Melon', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus buah melon segar.' },
  { id: 'jus-7', name: 'Jus Semangka', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus buah semangka segar.' },
  { id: 'jus-8', name: 'Jus Naga', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus buah naga segar.' },
  { id: 'jus-9', name: 'Jus Terong Belanda', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus terong belanda segar.' },
  { id: 'jus-10', name: 'Jus Nanas', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus buah nanas segar.' },
  { id: 'jus-11', name: 'Jus Kurma', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus kurma.' },
  { id: 'jus-12', name: 'Jus Kurma Susu', price: 15000, category: 'Minuman', subCategory: 'Jus', description: 'Jus kurma dengan susu.' },
  { id: 'jus-13', name: 'Jus Nanas Sawi', price: 18000, category: 'Minuman', subCategory: 'Jus', description: 'Jus campuran nanas dan sawi.' },
  { id: 'jus-14', name: 'Jus Tropizein', price: 18000, category: 'Minuman', subCategory: 'Jus', description: 'Jus campuran wortel, jeruk, dan Yakult.' },

  // HERBAL
  { id: 'herb-1', name: 'Jahe Serai Madu Panas', price: 15000, category: 'Minuman', subCategory: 'Herbal', description: 'Minuman herbal jahe, serai, dan madu panas.' },
  { id: 'herb-2', name: 'Jahe Serai Madu Dingin', price: 18000, category: 'Minuman', subCategory: 'Herbal', description: 'Minuman herbal jahe, serai, dan madu dingin.' },
  { id: 'herb-3', name: 'Sanger Jahe Panas', price: 13000, category: 'Minuman', subCategory: 'Herbal', description: 'Sanger dengan jahe panas/hangat.' },
  { id: 'herb-4', name: 'Sanger Jahe Dingin', price: 15000, category: 'Minuman', subCategory: 'Herbal', description: 'Sanger dengan jahe dingin.' },
  { id: 'herb-5', name: 'Teh Tarik Jahe Panas', price: 13000, category: 'Minuman', subCategory: 'Herbal', description: 'Teh tarik dengan jahe panas/hangat.' },
  { id: 'herb-6', name: 'Teh Tarik Jahe Dingin', price: 15000, category: 'Minuman', subCategory: 'Herbal', description: 'Teh tarik dengan jahe dingin.' },
  { id: 'herb-7', name: 'Susu Serai Jahe Panas', price: 13000, category: 'Minuman', subCategory: 'Herbal', description: 'Susu dengan serai dan jahe panas/hangat.' },
  { id: 'herb-8', name: 'Susu Serai Jahe Dingin', price: 15000, category: 'Minuman', subCategory: 'Herbal', description: 'Susu dengan serai dan jahe dingin.' },
  { id: 'herb-9', name: 'Madu Panas', price: 10000, category: 'Minuman', subCategory: 'Herbal', description: 'Minuman madu panas.' },
  { id: 'herb-10', name: 'Madu Dingin', price: 15000, category: 'Minuman', subCategory: 'Herbal', description: 'Minuman madu dingin.' },

  // Snacks / Tambahan
  { id: 'snack-1', name: 'Roti', price: 3000, category: 'Makanan Ringan', subCategory: 'Tambahan', description: 'Roti per porsi.' },
  { id: 'snack-2', name: 'Kacang', price: 10000, category: 'Makanan Ringan', subCategory: 'Tambahan', description: 'Kacang per porsi.' },
];


// Data untuk Opsi Tambahan (Modifiers)
export const MODIFIERS: MenuModifier[] = [
    { id: 'mod-1', name: 'Pakai Susu', price: 2000, description: 'Tambahan susu untuk minuman Anda.' },
];
