import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from sales route");
});

export default router;
