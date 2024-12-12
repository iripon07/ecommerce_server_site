import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductController.createProduct);
router.get("/get-all-products", ProductController.getAllProducts)
router.get("/:id", ProductController.getSingleProduct)
router.patch("/:id", ProductController.updateProduct)


export const ProductRoutes = router;
