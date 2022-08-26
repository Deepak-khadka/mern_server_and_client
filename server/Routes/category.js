import express from "express";
import { addCategory } from "../controller/category.js";
const router = express.Router();

router.post("/create", addCategory);

export default router;
