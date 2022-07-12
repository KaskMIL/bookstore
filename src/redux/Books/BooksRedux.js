// Actions
const ADDBOOK = 'ADD_BOOK';
const DELETEBOOK = 'DELETE_BOOK';

// Reducer
export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case DELETEBOOK:
      return [
        ...state.filter(book => {
          if (book.id !== action.payload) {
            return book;
          }
        })
      ];
    default: return state;
  }
}

// Actions Creators
export const add_book = (book) => {
  return {
    type: ADDBOOK,
    payload: book,
  }
}

export const delete_book = (id) => {
  return {
    type: DELETEBOOK,
    payload: id,
  }
}