import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoffee = createAsyncThunk(
  "coffee/fetchCoffee",
  async (sortBy = "") => {
    const response = await axios.get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
    );
    let data = response.data.data;

    if (sortBy === "name") {
      data = data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "price") {
      data = data.sort((a, b) => a.price - b.price);
    }

    return data;
  }
);

const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCoffee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coffeeSlice.reducer;
