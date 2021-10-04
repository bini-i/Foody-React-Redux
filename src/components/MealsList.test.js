import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MealsList from './MealsList';

describe('MealsList component', () => {
  it('renders list of Meals', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MealsList
          meals={[{
            id: 1, name: 'meal', category: 'meal1 cat', image: 'meal1 image', instructions: 'meal1 instru',
          }, {
            id: 2, name: 'meal', category: 'meal2 cat', image: 'meal2 image', instructions: 'meal2 instru',
          }]}
          filter="All Meals"
        />
      </Router>,
    );
    screen.getAllByText('meal').forEach((ele) => {
      expect(ele).toBeInTheDocument();
    });
  });
});
