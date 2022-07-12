import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/BooksRedux';
import categoriesReducer from './Categories/CategoriesRedux';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
