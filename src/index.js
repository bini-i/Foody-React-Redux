import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './reducers';
import getMeal from './helpers/api/getMeal';
import getCategory from './helpers/api/getCategory';
import { addCategory, addMeal } from './actions';
import alphabetsAtoZ from './helpers/alphabets';

const store = createStore(rootReducer);

alphabetsAtoZ().map(async (char) => {
  await getMeal(char).then((meals) => {
    if (meals) {
      store.dispatch(addMeal(meals));
    }
  });
});

getCategory().then((categories) => {
  store.dispatch(addCategory([{ strCategory: 'All Meals' }, ...categories]));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
