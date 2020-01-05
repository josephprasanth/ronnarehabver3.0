import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam,faUserInjured,faUniversity } from '@fortawesome/free-solid-svg-icons';
import './Hem.css';

class Hem extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="hero-section">
                    <div className="top-heading">
                        <h1>Välkommen till Ronna Rehab</h1>
                    </div>
                    <div className="bottom-heading">
                        <h4>Den lilla mottagning med störa hjärtat</h4>
                    </div>
                </div>
                <div className="features-section">
                    <div className="columns-wrapper">
                        <div className="column">
                            {/*Icon goes here*/}
                            <FontAwesomeIcon icon={faUserInjured} />
                            <p>Patientens Fokus</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="column">
                            {/*Icon goes here*/}
                            <FontAwesomeIcon icon={faSmileBeam} />    
                            <p>ArbetsGlädje</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="column">
                            {/*Icon goes here*/}
                            <FontAwesomeIcon icon={faUniversity}  />
                            <p>Kunskap</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                    </div>
                </div>
            </>
        );;
    }
}

export default Hem;