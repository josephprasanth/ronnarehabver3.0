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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <>
    <Router>


      {/*Navigation Wrapper*/}
      <div className="nav-bar">

        {/*Link Wrapper*/}
        <div className="links-wrapper">

          {/*Nav Link*/}
          <div className="nav-link">
            <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
          </div>
          <div className="nav-link">
            <Link to="/vierbjuder"><FontAwesomeIcon icon={faCoffee} style={{ marginRight: 4 }} />Vi Erbjuder</Link>
          </div>
          <div className="nav-link">
            <Link to="/braattveta"><FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 4 }} />Bra Att Veta</Link>
          </div>

          <div className="nav-link">
            <Link to="/hittamottagning"><FontAwesomeIcon icon={faAddressCard} /></Link>
          </div>

        </div>


        <Switch>
          <Route path="/" exact render={() => <Redirect to="/hem" />} />
          <Route path="/hem" component={Hem} />
          <Route path="/vierbjuder" component={ViErbjuder} />
          <Route path="/braattveta" component={BraAttVeta} />
          <Route path="/hittamottagning" component={HittaMottagning} />
          <Route path="/omoss" component={OmOss} />
        </Switch>

      </div>
    </Router>
  </>
);

export default NavBar;