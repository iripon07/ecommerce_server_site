import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../Shared/catchAsync";
import { UserService } from "./user.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../../Shared/sendResponse";

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.body;

    const result = await UserService.createUser(user);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      data: result,
      message: "User Create Successfully!!!",
    });
  }
);


const userLogin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log('user data', req.body);
    const user = req.body;
    console.log('data', user);

    // const result = await UserService.createUser(user);

    // sendResponse(res, {
    //   statusCode: httpStatus.OK,
    //   success: true,
    //   data: result,
    //   message: "User Create Successfully!!!",
    // });
  }
);

export const UserController = {
  createUser,
  userLogin
};
