import './styles/global.css';
import {
  BrowserRouter,
  Link,
} from 'react-router-dom';
import * as styles from './styles/App.module.css';
import MealsListContainer from './containers/MealsListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className={styles.header}>
          <div className={styles.headerBody}>
            <h1><a href="/">FOODY</a></h1>
            <ul>
              <Link to="/">
                <li>HOME</li>
              </Link>
              <li>CATEGORIES</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
        </header>
        <MealsListContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
