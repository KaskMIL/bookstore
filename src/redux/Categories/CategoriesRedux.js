// Actions
const CHECKSTATUS = 'CHECK_STATUS';

// REDUCER
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default: return state;
  }
}

// Action Creators
export const checkStatus = () => ({ type: CHECKSTATUS });
