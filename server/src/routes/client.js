import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from client route");
});

export default router;