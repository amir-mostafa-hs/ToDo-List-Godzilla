const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const TasksModel = require("./models/tasks.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tasks", async (req, res) => {
  try {
    const result = await TasksModel.find({});
    res.json(result);
  } catch (error) {
    res.json({ errorMessage: error });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const data = req.body;
    const result = await TasksModel.create({ ...data });
    res.json(result);
  } catch (error) {
    res.json({ errorMessage: error });
  }
});

async function connectDB(uri) {
  try {
    await mongoose.connect(uri, {
      dbName: "Todo-list",
    });

    app.listen(5000, () => {
      console.log("Server is running on port:", 5000);
    });
  } catch (error) {
    console.log(error);
  }
}
connectDB(process.env.MONGODB_URI);
