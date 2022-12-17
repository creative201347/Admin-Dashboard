import express from "express";
// import { getUser, getDashboardStats } from "../controllers/general.js";
import { getUser } from "../controllers/general.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from general route");
});
router.get("/user/:id", getUser);
// router.get("/dashboard", getDashboardStats);

export default router;
