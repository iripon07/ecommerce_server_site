import { StatusCodes } from "http-status-codes";
import ApiError from "../../../errors/ApiError";
import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (product: IProduct): Promise<IProduct | null> => {
  const productCreated = await Product.create(product);
  if (!productCreated) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Failed to create user."
    );
  }

  const result = await Product.findById(productCreated._id);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById({ _id: id });
  console.log("expected result", result);
  if (!result) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Product not found");
  }
  return result;
};

const updateProduct = async (
  id: string,
  payload: Partial<IProduct>
): Promise<IProduct | null> => {
  const isProductExist = await Product.findById(id);
  if (!isProductExist) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Product doesn't exist");
  }

  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
