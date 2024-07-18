import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "abc12",
    title: "homework",
    date: "2024-07-19T23:56",
    description: "react homework",
    directory: "main",
    important: false,
    status: false,
  },
  {
    id: "abc34",
    title: "shopping",
    date: "2024-07-19T23:56",
    description: "buy an apple",
    directory: "home",
    important: false,
    status: false,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      const newStoreData = state.filter(
        (task) => task.id !== action.payload.id
      );
      return newStoreData;
    },
    editTask: (state, action) => {
      const newStoreData = state.map((task) => {
        if (task.id === action.payload.id) {
          const newData = { ...task, ...action.payload };
          return newData;
        }
        return task;
      });
      return newStoreData;
    },
    changeStatusTask: (state, action) => {
      const newStoreData = state.map((task) => {
        if (task.id === action.payload.id) {
          const newData = { ...task, status: action.payload.status };
          return newData;
        }
        return task;
      });
      return newStoreData;
    },
  },
});

export const { addTask, editTask, removeTask, changeStatusTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
