import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/Index';
import HomePage from './containers/homePage/Index';
import ContactPage from './containers/contactPage/Index';
import WorkSamplePage from './containers/workSamplesPage/Index';
import Footer from './components/footer/Index';

const App = () => {

  return (
    <div className='webContainer'>
      <NavBar />
      <Route exact path="/"><HomePage /></Route>
      <Route path="/contact-me"><ContactPage /></Route>
      <Route path="/workSample"><WorkSamplePage /> </Route>
      <Footer />
  
    </div>
  );
};

export default App;
