import fetchMeal from './fetchMeal';

const getMeals = (char = null) => fetchMeal(char).then((meals) => {
  if (meals) {
    return meals.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      image: meal.strMealThumb,
      instructions: meal.strInstructions,
    }));
  }
  return null;
});

export default getMeals;
