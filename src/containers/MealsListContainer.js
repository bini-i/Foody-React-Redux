import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { mapDispatchToProps, mapStateToProps } from '../reducers';
import MealsList from '../components/MealsList';
import Meal from '../components/Meal';
import alphabetsAtoZ from '../helpers/alphabets';
import fetchCategory from '../helpers/api/fetchCategory';
import getMeals from '../helpers/api/getMeals';
import * as styles from '../styles/MealsList.module.css';

const MealsListContainer = ({
  meals, filter, categories, addMeals, addCategories, changeFilter,
}) => {
  useEffect(() => {
    alphabetsAtoZ().forEach((char) => {
      getMeals(char).then((meals) => {
        if (meals) {
          addMeals(meals);
        }
      });
    });

    fetchCategory().then((categories) => {
      (addCategories([{ strCategory: 'All Meals' }, ...categories]));
    });
  }, []);

  const changeCategory = (event) => {
    changeFilter(event.target.dataset.category);
  };

  const categoryList = categories.map((category) => <li key={category.idCategory + Math.floor(Math.random() * 100)}><button type="button" data-category={category.strCategory} onClick={changeCategory}>{category.strCategory}</button></li>);

  return (
    <div className={styles.mealsBodyWrapper}>
      <div className={styles.mealsBody}>
        <section className={styles.mealsSection}>
          <Switch>
            <Route exact path="/">
              <h2 className={styles.mealsHeader}>{filter}</h2>
              <div className={styles.mealsList}>
                <MealsList meals={meals} filter={filter} />
              </div>
            </Route>
            <Route exact path="/meal">
              <Meal />
            </Route>
          </Switch>
        </section>
        <section className={styles.mealsCategory}>
          <h2 className={styles.categoryHeader}>CATEGORIES</h2>
          <div className={styles.categoryList}>
            <ul>
              {categoryList}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsListContainer);

MealsListContainer.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  addMeals: PropTypes.func.isRequired,
  addCategories: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
