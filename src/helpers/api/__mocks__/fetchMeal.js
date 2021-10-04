// eslint-disable-next-line no-unused-vars
const fetchMeal = (char = null) => Promise.resolve(
  [
    {
      idMeal: 1,
      strMeal: 'Apam balik',
      strCategory: 'Dessert',
      strMealThumb: 'https://thumb',
      strInstructions: 'Mix milk, oil and egg together',
    },

    {
      idMeal: 2,
      strMeal: 'Ayam Percik',
      strCategory: 'Chicken',
      strMealThumb: 'https://thumb',
      strInstructions: 'add the ingredients for the spice paste',
    },
  ],
);

export default fetchMeal;
