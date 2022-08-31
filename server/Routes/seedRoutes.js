import express from "express";
import CategoryModel from "../models/Category.js";
import UserModel from "../models/Users.js";
import data from "../seeder/staticData.js";
const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await CategoryModel.remove({});
  const createCategories = await CategoryModel.insertMany(data.categories);

  await UserModel.remove({});
  const createUsers = await UserModel.insertMany(data.users);

  res.send({ createCategories, createUsers });
});

export default seedRouter;
