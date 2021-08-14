import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/homePage/Index';
import ContactPage from './containers/contactPage/Index';
import NavBar from './components/navBar/Index';
import Footer from './components/footer/Index';

const App = () => {

  return (
    <div className='webContainer'>
      <NavBar />
      <Route exact path='/'><HomePage /></Route>
      <Route path="/contact-me"><ContactPage /></Route>
      <Footer />
    </div>
  );
};

export default App;
