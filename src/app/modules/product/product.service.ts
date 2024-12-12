import { StatusCodes } from "http-status-codes";
import ApiError from "../../../errors/ApiError";
import { IProduct } from "./product.interface";
import Product from "./product.model";

const productCreate = async (product: IProduct): Promise<IProduct | null> => {
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

export const ProductService = {
  productCreate,
};
