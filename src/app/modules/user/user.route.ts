import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.createUser);
router.post('/login', userController.userLogin)

export const UserRoutes = router;
