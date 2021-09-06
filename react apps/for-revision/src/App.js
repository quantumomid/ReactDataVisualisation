import './App.css';
import AllData from './AllData'
import PPCData from './PPCData';
import TVData from './TVData';
import OOHData from './OOHData';
import DMData from './DMData';

import {Component} from 'react'
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {

  
  render() {
    return (
      <Router>
      <div className="App">
        <h1>React Data Visualisation</h1>
        {/* <Link to="/">Home</Link> */}
        <nav>
          <Link to='/All'>All Plots</Link>

          <Link to='/PPC'>PPC</Link>
          <Link to='/TV'>TV</Link>
          <Link to='/OOH'>OOH</Link>
          <Link to='/DM'>DM</Link>

        </nav>

        <Switch>
          <Route path="/PPC">
            <PPCData />
          </Route>
          <Route path="/All">
            <AllData />
          </Route>
          <Route path="/TV">
            <TVData />
          </Route>
          <Route path="/DM">
            <DMData />
          </Route>
          <Route path="/OOH">
            <OOHData />
          </Route>
        </Switch>
        
      </div>
      </Router>


    );
  }
}


export default App;
