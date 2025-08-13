import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
