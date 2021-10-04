import filterReducer from './filter';

describe('Filter reducer', () => {
  it('changes filter state of redux store', () => {
    expect(filterReducer('', { type: 'change filter', filter: 'Goat' })).toStrictEqual('Goat');
  });
  it('it does not change filter if action not passed', () => {
    expect(filterReducer('', { categories: [{ category: 'Breakfast' }] })).toStrictEqual('');
  });
});
