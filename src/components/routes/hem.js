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

                <div>
                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4085.436885417541!2d17.592329!3d59.204005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f0d809ccca91f%3A0xd411d6b383d698bc!2sRobert%20Anbergs%20v%C3%A4g%2033%2C%20151%2051%20S%C3%B6dert%C3%A4lje!5e0!3m2!1sen!2sse!4v1578419648085!5m2!1sen!2sse"></iframe><br />
                </div>


            </>
        );;
    }
}

export default Hem;