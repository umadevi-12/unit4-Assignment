import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonmock.hackerrank.com/api/football_matches?page=2';


export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async () => {
    const response = await axios.get(API_URL);
    return response.data.data; 
  }
);

const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
  favorites: [],
  filter: {
    search: '',
    teamName: '',
    date: '',
    outcome: '',
  },
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const matchId = action.payload;
      if (state.favorites.includes(matchId)) {
        state.favorites = state.favorites.filter(id => id !== matchId);
      } else {
        state.favorites.push(matchId);
      }
    },
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.footballMatches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export const { toggleFavorite, setFilter } = matchesSlice.actions;
export default matchesSlice.reducer;
