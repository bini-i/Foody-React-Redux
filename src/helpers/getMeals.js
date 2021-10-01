import fetchMeal from './api/fetchMeal';

const getMeals = (char) => fetchMeal(char).then((meals) => meals);

export default getMeals;
