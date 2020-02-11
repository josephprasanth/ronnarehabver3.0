import React, { Component } from 'react';
import NavBar from './NavigationBar';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
    state = {}
    render() {
        return (
            <>
                <Header />
                <NavBar />
                <Footer />
            </>
        );
    }
}

export default App;




