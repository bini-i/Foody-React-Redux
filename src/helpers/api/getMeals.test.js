import getMeals from './getMeals';

jest.mock('./fetchMeal');

describe('should fetch list of meals', () => {
  it('fetches list of meals', () => {
    getMeals().then((meals) => {
      expect(meals).toStrictEqual([
        {
          id: 1,
          name: 'Apam balik',
          category: 'Dessert',
          image: 'https://thumb',
          instructions: 'Mix milk, oil and egg together',
        },

        {
          id: 2,
          name: 'Ayam Percik',
          category: 'Chicken',
          image: 'https://thumb',
          instructions: 'add the ingredients for the spice paste',
        },
      ]);
    });
  });
});
