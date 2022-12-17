import express from "express";
import { getProducts } from "../controllers/client.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from client route");
});
router.get("/products", getProducts);

export default router;
