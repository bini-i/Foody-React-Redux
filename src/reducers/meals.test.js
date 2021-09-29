import mealsReducer from './meals';

describe('Meal reducer', () => {
  it('adds a meal object to the redux state if an action with add meal type and meal object is passed', () => {
    expect(mealsReducer([], { type: 'add meal', meals: [{ strMeal: 'Apple' }] })).toStrictEqual([{ strMeal: 'Apple' }]);
  });
  it('does not add the meal object to redux state if an action type is not passed', () => {
    expect(mealsReducer([], { meals: [{ strMeal: 'Apple' }] })).toStrictEqual([]);
  });
});
