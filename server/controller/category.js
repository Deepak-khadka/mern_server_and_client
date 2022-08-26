import CategoryModel from "../models/Category.js";
import slugify from "slugify";

export const addCategory = async (req, res) => {
  /* Create a category object where slug can be auto generated according to their name */
  const category = {
    name: req.body.name,
    slug: slugify(req.body.name),
    is_parent: req.body.is_parent,
  };

  const newCategory = new CategoryModel(category);
  await newCategory.save((error, category) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (category) {
      return res.status(201).json({ category });
    }
  });
};
