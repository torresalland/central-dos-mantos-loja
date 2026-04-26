export type ShirtColor = 'Amarela' | 'Azul' | '';
export type ShirtSize = 'P' | 'M' | 'G' | 'GG' | '';

export interface ShirtItem {
  id: string;
  color: ShirtColor;
  size: ShirtSize;
  name: string;
  number: string;
}

export interface Cart {
  items: ShirtItem[];
}
