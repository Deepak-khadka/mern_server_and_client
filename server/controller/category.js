import CategoryModel from "../models/Category.js";
import slugify from "slugify";

/** Retrieve all the category list  */

export const categoryList = (req, res) => {
  CategoryModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

/* Create a category object where slug can be auto generated according to their name */
export const addCategory = async (req, res) => {
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

/* Delete the category by its id  */
export const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  await CategoryModel.deleteOne({ _id: categoryId });

  res.send().json({ message: "Category Deleted successfully " });
};

/** To Update the category by it's id */
export const updateCategory = async (request, response) => {
  const id = request.params.id;

  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { $set: request.body },
    { new: true }
  );

  response.status(201).json({ category });
};
