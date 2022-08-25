const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const dotenv = require("dotenv");

dotenv.config();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB;

mongoose.connect(mongoUrl);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("SERVER RUNS PERFECTLY");
});
