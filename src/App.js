import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import Header from './PrimarySections/Header/Header';
import Navigation from './PrimarySections/Navigation/Navigation';
import NoRoutes from './NoRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Navigation/>
        <Switch>
          <Route path='/buy theme' component={ NoRoutes }/>
          <Route path='/' component={ Home }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
