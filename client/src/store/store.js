import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasksSlice";
import directories from "./directoriesSlice";

const store = configureStore({
  reducer: {
    tasks,
    directories,
  },
});

export default store;
