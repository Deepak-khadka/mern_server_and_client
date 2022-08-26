import express from "express";
import CategoryModel from "../models/Category.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const category = req.body;
  const newCategory = new CategoryModel(category);
  await newCategory.save((error, category) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (category) {
      return res.status(201).json({ category });
    }
  });
});

export default router;
