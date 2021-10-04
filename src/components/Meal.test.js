import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Meal from './Meal';

describe('Meal component', () => {
  it('renders Meal component', () => {
    const name = 'meal Name';
    const category = 'meal category';
    const image = 'image addr';
    const instructions = 'meal instru';
    render(
      <MemoryRouter initialEntries={[{
        state: {
          name, category, image, instructions,
        },
      }]}
      >
        <Meal />
      </MemoryRouter>,
    );
    expect(screen.getByText('meal Name')).toBeInTheDocument();
    expect(screen.getByText('meal category')).toBeInTheDocument();
    expect(screen.getByText('meal instru')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
