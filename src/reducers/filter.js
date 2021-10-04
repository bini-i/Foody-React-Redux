import { CHANGE_FILTER } from '../actions';

const filterReducer = (state = 'All Meals', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
