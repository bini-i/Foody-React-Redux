import { ADD_CATEGORY } from '../actions';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, ...action.categories];
    default:
      return state;
  }
};

export default categoriesReducer;
