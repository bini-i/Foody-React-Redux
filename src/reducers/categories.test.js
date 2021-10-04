import categoriesReducer from './categories';

describe('Category reducer', () => {
  it('adds a category object to the redux state if an action with add category type and category object is passed', () => {
    expect(categoriesReducer([], { type: 'add category', categories: [{ category: 'Breakfast' }] })).toStrictEqual([{ category: 'Breakfast' }]);
  });
  it('does not add the category object to redux state if an action type is not passed', () => {
    expect(categoriesReducer([], { categories: [{ category: 'Breakfast' }] })).toStrictEqual([]);
  });
});
