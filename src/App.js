import React from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import LoanInfo from './components/loanInfo/LoanInfo';
import Contact from './components/contact/Contact';
import './styles.css';

function App() {
    return (
        <div>
            <Header />
            <div className="app-container">
                <Home />
                <LoanInfo />
                <About />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
