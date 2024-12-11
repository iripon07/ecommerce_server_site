import mongoose, { Model } from "mongoose";




export interface IProduct  {
  name: string;
  description: string;
  price: number;
  category: string[]; 
  brand: string;
  stock: number;
  images: { url: string; publicId: string }[];
  ratings: number; 
  reviews: {
    userId: mongoose.Types.ObjectId;
    name: string;
    rating: number;
    comment: string;
    createdAt: Date;
  }[]; 
  isFeatured: boolean; 
  createdAt: Date;
  updatedAt: Date;
}

export type ProductModel = Model<IProduct, Record<string, unknown>>;