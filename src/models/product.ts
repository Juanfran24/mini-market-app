export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: Image;
}

interface Image {
  url: string;
  alt: string;
  height: number;
}