import { model, Schema } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      maxlength: [2000, "Product description cannot exceed 2000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Product price cannot be less than 0"],
    },
    category: {
      type: [String],
      required: [true, "At least one category is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [0, "Stock cannot be less than 0"],
      default: 0,
    },
    images: [
      {
        url: { type: String, required: true },
        publicId: { type: String, required: true },
      },
    ],
    ratings: {
      type: Number,
      default: 0,
      min: [0, "Ratings cannot be less than 0"],
      max: [5, "Ratings cannot exceed 5"],
    },
    reviews: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        rating: {
          type: Number,
          required: true,
          min: [0, "Rating cannot be less than 0"],
          max: [5, "Rating cannot exceed 5"],
        },
        comment: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct, ProductModel>("Product", ProductSchema);

export default Product;
