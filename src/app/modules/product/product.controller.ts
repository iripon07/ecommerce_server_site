import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { ProductService } from "./product.service";

const createProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const product = req.body;

    const result = await ProductService.productCreate(product);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      data: result,
      message: "User Create Successfully!!!",
    });
  }
);

export const ProductController = {
  createProduct,
};
