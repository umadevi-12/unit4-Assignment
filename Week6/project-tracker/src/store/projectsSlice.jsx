import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects, addProject } from "../api/firebase";

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const data = await getProjects();
  return data;
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: { projects: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload || [];
      state.status = "succeeded";
    });
  },
});

export default projectsSlice.reducer;
