import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import logo from '../resources/images/logobig-2.png';
import NavigationBar from './NavigationBar';
class Header extends Component {    
    render() {
        return (
            <>
                <div className="navigation-wrapper">

                    <div className="left-column">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        <div className="contact-hours-wrapper">
                            <div className="phone">08-5503 3233</div>
                            <div className="hours"> 08:00 - 16:00</div>
                        </div>
                    </div>

                    <div className="center-column">
                        <div className="banner-image">
                            <img src={logo} alt="Logo"/>
                        </div>
                        <div className="banner-message">
                            Ronna Rehab Ab
                    </div>
                   {/*NavigationBar*/}
                    </div>

                    <div className="right-column">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div className="address-wrapper">
                            Robert Anbergs Väg 33, Södertälje
                    </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Header;