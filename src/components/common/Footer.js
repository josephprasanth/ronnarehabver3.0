import React from 'react';
import './Footer.css';
import {
    BrowserRouter as Router,
    Link,
    Switch
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

                    <div className="copyright-wrapper">
                        Website - Branded and Created in React by Prasanth Joseph - &copy; 2020 All rights reserved
                    </div>

                </div>

                <Switch>

                </Switch>
            </Router>



        </>
    );
}

export default Footer;