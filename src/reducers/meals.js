import { ADD_MEAL } from '../actions';

const mealsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL: {
      const newState = [...state, ...action.meals];
      newState.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default mealsReducer;
