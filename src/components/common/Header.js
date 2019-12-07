import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="navigation-wrapper">
                    <div className="contact-hours-wrapper">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                        08-550 33233
                        08:00-16:00
                    </div>
                    <div className="logo">
                        Welcome To Ronna Rehab
                    </div>
                    <div className="address-wrapper">
                        {/*Adress*/}
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        Robert Anbergs Väg 33, Södertälje
                    </div>
                </div>
            </>
        );
    }
}

export default Header;