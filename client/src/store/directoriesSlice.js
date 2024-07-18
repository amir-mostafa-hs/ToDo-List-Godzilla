import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "def12",
    title: "main",
    description: "root directory",
  },
  {
    id: "def34",
    title: "homework",
    description: "homework directory",
  },
];

const directoriesSlice = createSlice({
  name: "directories",
  initialState,
  reducers: {
    addDirectory: (state, action) => {
      state.push(action.payload);
    },
    removeDirectory: (state, action) => {
      const newStoreData = state.filter(
        (directory) => directory.id !== action.payload.id
      );
      return newStoreData;
    },
    editDirectory: (state, action) => {
      const newStoreData = state.map((directory) => {
        if (directory.id === action.payload.id) {
          const newData = { ...directory, ...action.payload };
          return newData;
        }
        return directory;
      });
      return newStoreData;
    },
  },
});

export const { addDirectory, editDirectory, removeDirectory } =
  directoriesSlice.actions;

export default directoriesSlice.reducer;
