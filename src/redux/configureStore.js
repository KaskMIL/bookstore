import { configureStore } from '@reduxjs/toolkit';
import BooksAsync from './Books/BooksAsync';
import categoriesReducer from './Categories/CategoriesRedux';

const initialiData = {};

const store = configureStore({
  reducer: {
    books: BooksAsync,
    categories: categoriesReducer,
  },
  initialiData,
});

export default store;
