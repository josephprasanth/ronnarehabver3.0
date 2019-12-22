import React, { Component } from 'react';
import './Hem.css';

class Hem extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div className="hero-section">
                    <div className="top-heading">
                    <h1>Välkommen till Ronna Rehab</h1>
                    </div>
                    <div className="bottom-heading">
                    <h3>Den lilla mottagning med störa hjärtat</h3>
                    </div>
                </div>
            </>
        );;
    }
}
 
export default Hem;