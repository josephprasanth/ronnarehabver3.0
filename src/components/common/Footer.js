import React from 'react';
import './Footer.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <Router>
                <div className="base-footer-container">

                    <div className="social-media-icons-wrapper">
                        <div className="facebook-icon">
                            <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link>
                        </div>
                        <div className="linkedin-icon">
                            <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </div>
                        <div className="instagram-icon">
                            <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>

                </div>

                <Switch>

                </Switch>
            </Router>


            <div className="footerMain">
                Website - Branded and Created in React by Prasanth Joseph - Copyright 2020 - All rights reserved
            </div>
        </>
    );
}

export default Footer;