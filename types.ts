
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Minuman' | 'Makanan Ringan';
  subCategory: 'Robusta' | 'Arabica' | 'Kopi Khop' | 'Boh Manok Weng' | 'Lemon Tea' | 'Teh' | 'Sachet' | 'Jus' | 'Herbal' | 'Tambahan';
  description: string;
}

export interface MenuModifier {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  notes: string;
  price: number;
}

export interface Order {
  items: OrderItem[];
  total: number;
}

export interface Table {
  id: number;
  name: string;
  order: OrderItem[];
  chatHistory: ChatMessage[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface GeminiResponse {
  action: 'UPDATE_ORDER' | 'CALCULATE_BILL' | 'SPLIT_BILL' | 'CONFIRMATION' | 'ERROR' | 'CLEAR_ORDER';
  message: string;
  updatedOrder?: OrderItem[];
  bill?: {
    total: number;
    subtotal: number;
    tax: number;
    splitBills?: { items: string[]; total: number }[];
  };
}
