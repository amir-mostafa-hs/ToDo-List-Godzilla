const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  directory: String,
  important: Boolean,
  status: Boolean,
});

const TasksModel = model("Tasks", TaskSchema);

module.exports = TasksModel;
