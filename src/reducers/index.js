import { combineReducers } from 'redux';
import mealsReducer from './meals';
import filterReducer from './filter';
import { addMeal, changeFilter } from '../actions';
import categoriesReducer from './categories';

export const rootReducer = combineReducers({
  meals: mealsReducer,
  categories: categoriesReducer,
  filter: filterReducer,
});

export const mapStateToProps = (state) => ({
  meals: state.meals,
  categories: state.categories,
  filter: state.filter,
});

export const mapDispatchToProps = (dispatch) => ({
  addMeals: (meals) => {
    dispatch(addMeal(meals));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});
