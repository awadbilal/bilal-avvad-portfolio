import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/Index';
import HomePage from './containers/homePage/Index';
import AboutPage from './containers/aboutPage/Index';
import WorkSamplePage from './containers/workSamplesPage/Index';
import ResumePage from './containers/resumePage/Index';
import ContactPage from './containers/contactPage/Index';
import Footer from './components/footer/Index';

const App = () => {

  return (
    <>
      <div className='webContainer'>
        <NavBar />
        <Route exact path="/"><HomePage /></Route>
        <Route path="/about"><AboutPage /></Route>
        <Route path="/workSample"><WorkSamplePage /> </Route>
        <Route path="/resume"><ResumePage /></Route>
        <Route path="/contact-me"><ContactPage /></Route>
        <Footer />
     </div>
    </>
  );
};

export default App;
