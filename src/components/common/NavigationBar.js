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
      <div className="links-wrapper">

        {/*Nav Link*/}
        <div className="nav-link">
          <Link to="/">Hem</Link>
        </div>
        <div className="nav-link">
          <Link to="/vierbjuder">Vi Erbjuder</Link>
        </div>
        <div className="nav-link">
          <Link to="/braattveta">Bra Att Veta</Link>
        </div>
        <div className="nav-link">
          <Link to="/omoss">Om Oss</Link>
        </div>
        <div className="nav-link">
          <Link to="/hittamottagning">Hitta Mottagning</Link>
        </div>

      </div>

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