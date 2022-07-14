import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API
export const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rp0oOHqDES4ymPnOtaZR/books';

// Actions
const ADDBOOK = 'bookstore/Books/ADD_BOOK';
const DELETEBOOK = 'bookstore/Books/DELETE_BOOK';
const UPDATESTATE = 'bookstore/Books/UPDATE_STATE';

const initialState = [];

// Async actions creators
export const getBookList = createAsyncThunk(UPDATESTATE, async () => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
});

export const addBook = createAsyncThunk(ADDBOOK, async (newBook) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
});

export const deleteBook = createAsyncThunk(DELETEBOOK, async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
});

// Slice reducer
const sliceBook = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBookList.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((element) => ({
        item_id: element,
        ...action.payload[element][0],
      }));
      return books;
    },
    [addBook.fulfilled]: (state, action) => [...state, action.payload],
    [deleteBook.fulfilled]: (state, action) => [
      ...state.filter((book) => book.id !== action.payload.item_id),
    ],
  },
});

export default sliceBook.reducer;
