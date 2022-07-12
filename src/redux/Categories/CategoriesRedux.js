// Actions
const CHECKSTATUS = 'bookstore/Categories/CHECK_STATUS';

// Initial state
const initialState = [];

// REDUCER
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default: return state;
  }
}

// Action Creators
export const checkStatus = () => ({ type: CHECKSTATUS });
