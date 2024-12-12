import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { ProductService } from "./product.service";

const createProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const product = req.body;

    const result = await ProductService.createProduct(product);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      data: result,
      message: "User Create Successfully!!!",
    });
  }
);

const getAllProducts: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProducts();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "All products retrieved successfully!",
  });
});


const getSingleProduct: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  console.log('id check', id);
  const result = await ProductService.getSingleProduct(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Product retrieved successfully!",
  });
});

const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  console.log("id check", id);
  const result = await ProductService.getSingleProduct(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Product retrieved successfully!",
  });
});


export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
