import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/homePage/Index';
import ContactPage from './containers/contactPage/Index';

const App = () => {

  return (
    <div className='webContainer'>
      <HomePage />
      <Route path="/contact-me"><ContactPage /></Route>
    </div>
  );
};

export default App;
