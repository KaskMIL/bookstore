// Actions
const ADDBOOK = 'bookstore/Books/ADD_BOOK';
const DELETEBOOK = 'bookstore/Books/DELETE_BOOK';

// Initial state
const initialState = [{ title: 'Foundation', author: 'Asimov', id: 1 }, { title: 'El Alquimista', author: 'Cohelo', id: 2 }, { title: 'the crow', author: 'Edgard Allan Poe', id: 3 }];

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
