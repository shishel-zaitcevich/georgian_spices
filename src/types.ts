export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'blend' | 'single';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Blend {
  id: number;
  name: string;
  description: string;
  image: string;
}
