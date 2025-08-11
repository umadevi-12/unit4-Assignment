import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (query) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return res.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch movies';
      });
  },
});

export default movieSlice.reducer;
