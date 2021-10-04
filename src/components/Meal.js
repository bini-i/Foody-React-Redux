import { useLocation } from 'react-router-dom';
import * as styles from '../styles/Meal.module.css';

const Meal = () => {
  const location = useLocation();
  const {
    name, category, image, instructions,
  } = location.state;
  return (
    <>
      <div className={styles.meal}>
        <div>
          <img className={styles.mealImage} src={image} alt={name} />
          <div className={styles.mealCategory}>{category}</div>
        </div>
        <div className={styles.mealsDesc}>
          <div className={styles.mealName}>{name}</div>
          <div className={styles.mealInstruction}>{instructions}</div>
        </div>
      </div>
    </>
  );
};

export default Meal;
