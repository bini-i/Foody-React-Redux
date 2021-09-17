/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from '../styles/MealsList.module.css';

const MealsList = ({
  meals, filter,
}) => {
  const filteredMeals = () => {
    if (filter !== 'All Meals') {
      return meals.filter((meal) => meal.strCategory === filter);
    }
    return meals;
  };

  const mealsList = filteredMeals().map((meal) => (
    <Link
      key={meal.idMeal}
      className={styles.meal}
      to={{
        pathname: '/meal',
        state: {
          name: meal.strMeal, category: meal.strCategory, image: meal.strMealThumb, instructions: meal.strInstructions,
        },
      }}
    >
      <div className={styles.mealName}>{meal.strMeal}</div>
      <img className={styles.mealImage} src={meal.strMealThumb} alt={meal.strMeal} />
      <div className={styles.mealCategory}>{meal.strCategory}</div>
    </Link>
  ));

  return (
    <>
      { mealsList }
    </>
  );
};

export default MealsList;

MealsList.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
};
