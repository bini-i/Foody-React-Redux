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
            idMeal: 1, strMeal: 'meal', strCategory: 'meal1 cat', strMealThumb: 'meal1 image', strInstructions: 'meal1 instru',
          }, {
            idMeal: 2, strMeal: 'meal', strCategory: 'meal2 cat', strMealThumb: 'meal2 image', strInstructions: 'meal2 instru',
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
