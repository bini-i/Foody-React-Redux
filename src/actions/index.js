export const ADD_MEAL = 'add meal';
export const CHANGE_FILTER = 'change filter';
export const ADD_CATEGORY = 'add category';

export const addMeal = (meals) => ({
  type: ADD_MEAL,
  meals,
});
export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export const addCategory = (categories) => ({
  type: ADD_CATEGORY,
  categories,
});
