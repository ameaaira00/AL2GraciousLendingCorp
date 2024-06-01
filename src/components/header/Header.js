import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="branding">Gracious Group Lending Phils. Corp. - AL2 Loan Consultant</div>
                <div className="nav-container">
                    <nav className="nav">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#loan-info">Loan Info</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        </header>
    );
}

export default Header;
