import express from "express";
import {
  getCustomers,
  getProducts,
  getTransactions,
} from "../controllers/client.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from client route");
});
router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

export default router;
