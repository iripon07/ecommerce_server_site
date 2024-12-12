import { model, Schema } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    currency: { type: String, required: true },
    stock: { type: Number, required: true },
    images: [
      {
        url: { type: String, required: true },
        alt: { type: String, required: true },
      },
    ],
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    reviews: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    specifications: {
      type: Map,
      of: String, // Allows flexible key-value pairs for specifications
    },
    variants: [
      {
        id: { type: String, required: true },
        color: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

const Product = model<IProduct, ProductModel>("Product", productSchema);

export default Product;
