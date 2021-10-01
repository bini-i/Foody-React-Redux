const MealAPI = (() => {
  const constructURL = (key) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${key}`;

  const getMeal = (key) => new Promise((resolve, reject) => {
    fetch(constructURL(key), { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => resolve(data.meals))
      .catch((error) => reject(error));
  });

  return getMeal;
})();

export default MealAPI;
