export interface Product {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  price?: number | string;
  image?: string;
  category?: 'blend' | 'single';
  spices?: string;
  origins?: string;
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

export interface HomeModalProps {
  id: string;
  title: string;
  price: string;
  description: string;
  info: [
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
  ];
  spices: string[];
}
