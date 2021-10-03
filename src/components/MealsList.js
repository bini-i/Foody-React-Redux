import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from '../styles/MealsList.module.css';

const MealsList = ({
  meals, filter,
}) => {
  const filteredMeals = () => {
    if (filter !== 'All Meals') {
      return meals.filter((meal) => meal.category === filter);
    }
    return meals;
  };

  const mealsList = filteredMeals().map((meal) => {
    const {
      id, name, category, image, instructions,
    } = meal;
    return (
      <Link
        key={id}
        className={styles.meal}
        to={{
          pathname: '/meal',
          state: {
            name, category, image, instructions,
          },
        }}
      >
        <div className={styles.mealName}>{name}</div>
        <img className={styles.mealImage} src={image} alt={meal.name} />
        <div className={styles.mealCategory}>{category}</div>
      </Link>
    );
  });

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
