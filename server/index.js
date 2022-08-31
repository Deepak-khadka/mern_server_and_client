import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/Users.js";
import dotenv from "dotenv";
import cors from "cors";
import CategoryRoute from "./Routes/category.js";
import UserRoute from "./Routes/user.js";
import seedRouter from "./Routes/seedRoutes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
/** Use this /seed route to seed the Model Data which is listed in Data component */
app.use("/seed", seedRouter);

// This is for the user list
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  }).sort({ name: -1 });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.use("/api/user", UserRoute);
// End of the user routing list

// Category Route list is binding in CategoryRoute
app.use("/api/category", CategoryRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("SERVER RUNS PERFECTLY");
});
