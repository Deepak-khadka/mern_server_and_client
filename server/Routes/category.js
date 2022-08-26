import express from "express";
import { addCategory, categoryList } from "../controller/category.js";
const router = express.Router();

router.get("/", categoryList);
router.post("/create", addCategory);

export default router;
