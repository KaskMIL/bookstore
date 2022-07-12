// Actions
const ADDBOOK = 'ADD_BOOK';
const DELETEBOOK = 'DELETE_BOOK';

// Initial state
const initialState = [];

// Reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case DELETEBOOK:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];
    default: return state;
  }
}

// Actions Creators
export const addBook = (book) => ({
  type: ADDBOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: DELETEBOOK,
  payload: id,
});
