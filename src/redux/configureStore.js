import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/BooksRedux';
import categoriesReducer from './Categories/CategoriesRedux';
import initialData from './intialData';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
  preloadedState: initialData,
});

export default store;
