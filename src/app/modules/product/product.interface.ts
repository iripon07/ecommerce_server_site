import mongoose, { Model } from "mongoose";




import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  discount?: number; // Optional field
  currency: string;
  stock: number;
  images: {
    url: string;
    alt: string;
  }[];
  rating: {
    average: number;
    count: number;
  };
  reviews: {
    user: string;
    comment: string;
    rating: number;
    date: Date;
  }[];
  specifications: {
    [key: string]: string; // Dynamic key-value pairs for specifications
  };
  variants: {
    id: string;
    color: string;
    price: number;
    stock: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}


export type ProductModel = Model<IProduct, Record<string, unknown>>;