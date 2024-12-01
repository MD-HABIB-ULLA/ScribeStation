export interface TProduct {
    name: string;
    brand: string;
    price: number;
    category: string;
    description: string;
    quantity: number;
    inStock: boolean;
    isDeleted?: "true" | "false" | "archived"; // Optional field
  }
  