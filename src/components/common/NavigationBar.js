import React from "react";
import './NavigationBar.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import Hem from "../routes/hem";
import ViErbjuder from "../routes/vierbjuder";

const NavBar = () => (  
    <Router>
      <div className="NavBar">
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/vierbjuder">Vi Erbjuder</Link>
          </li>
          <li>
            <Link to="/braattveta">Bra Att Veta</Link>
          </li>
          <li>
            <Link to="/omoss">Om Oss</Link>
          </li>
          <li>
            <Link to="/hittamottagning">Hitta Mottagning</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" render = {() => <Redirect to="/hem" />} />
          <Route path="/hem" component={Hem} />
          <Route path="/vierbjuder" component={ViErbjuder} />          
        </Switch>
      </div>
    </Router>  
);

export default NavBar;