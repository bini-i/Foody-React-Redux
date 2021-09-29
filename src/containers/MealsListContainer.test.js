import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { createMemoryHistory } from 'history';
import MealsListContainer from './MealsListContainer';
import { rootReducer } from '../reducers';

const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) => {
  const history = createMemoryHistory();

  return {
    ...render(<Provider store={store}><Router history={history}>{ui}</Router></Provider>),
    store,
  };
};

describe('MealsListContainer', () => {
  it('renders header for list of meals', () => {
    renderWithRedux(
      <MealsListContainer />,
    );
    expect(screen.getByText('All Meals')).toBeInTheDocument();
  });
  it('renders list of meals', async () => {
    renderWithRedux(
      <MealsListContainer />,
    );
    expect(await screen.findByText('Apam balik', {}, { timeout: 5000 })).toBeInTheDocument();
    expect(await screen.findByText('Yaki Udon', {}, { timeout: 5000 })).toBeInTheDocument();
  });
  it('renders list of categories', async () => {
    renderWithRedux(
      <MealsListContainer />,
    );
    expect(await screen.findByText('Breakfast', {}, { timeout: 5000 })).toBeInTheDocument();
  });
});
