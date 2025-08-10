import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: nanoid(),
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      isRead: true,
    },
    {
      id: nanoid(),
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      isRead: false,
    },
  ],
  filter: {
    status: "all",
    author: "",
    genre: "",
  },
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(book) {
        return { payload: { id: nanoid(), ...book, isRead: false } };
      },
    },
    toggleRead(state, action) {
      const book = state.list.find((b) => b.id === action.payload);
      if (book) book.isRead = !book.isRead;
    },
    deleteBook(state, action) {
      state.list = state.list.filter((b) => b.id !== action.payload);
    },
    editBook(state, action) {
      const index = state.list.findIndex((b) => b.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { addBook, toggleRead, deleteBook, editBook, setFilter } = booksSlice.actions;
export default booksSlice.reducer;
