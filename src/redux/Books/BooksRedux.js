/**

// API
export const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rp0oOHqDES4ymPnOtaZR/books';

// Actions
const ADDBOOK = 'bookstore/Books/ADD_BOOK';
const DELETEBOOK = 'bookstore/Books/DELETE_BOOK';
const UPDATESTATE = 'bookstore/Books/UPDATE_STATE';

// Initial state
const initialState = [];

// Reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATESTATE:
      return [...state, action.payload];
    case ADDBOOK:
      return [...state, action.payload];
    case DELETEBOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
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

const updateState = (list) => ({
  type: UPDATESTATE,
  payload: list,
});

export const getBooksfromAPI = () => (dispatch) => {
  fetch(`${baseUrl}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => dispatch(updateState(json)));
};
 */
