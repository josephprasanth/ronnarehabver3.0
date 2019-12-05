import React from "react";
import './NavigationBar.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import Hem from "../routes/Hem";
import ViErbjuder from "../routes/Vierbjuder";
import BraAttVeta from "../routes/Braattveta";
import OmOss from '../routes/Omoss';
import HittaMottagning from '../routes/Hittamottagning';

const NavBar = () => (
  <Router>
     {/*Navigation Wrapper*/} 
     <div className="NavBar">
     {/*Link Wrapper*/}
      <h2><Link to="/">Hem</Link></h2>
      <h2><Link to="/vierbjuder">Vi Erbjuder</Link></h2>
      <h2><Link to="/braattveta">Bra Att Veta</Link></h2>
      <h2><Link to="/omoss">Om Oss</Link></h2>
      <h2><Link to="/hittamottagning">Hitta Mottagning</Link></h2>

      <hr />

      <Switch>
        <Route exact path="/" render={() => <Redirect to="/hem" />} />
        <Route path="/hem" component={Hem} />
        <Route path="/vierbjuder" component={ViErbjuder} />
        <Route path="/braattveta" component={BraAttVeta} />
        <Route path="/hittamottagning" component={HittaMottagning} />
        <Route path="/omoss" component={OmOss} />
      </Switch>

    </div>
  </Router>
);

export default NavBar;