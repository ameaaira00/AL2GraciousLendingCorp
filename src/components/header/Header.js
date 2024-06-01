import React from 'react';
import './Header.css'; // Import the CSS file
import { FaPhone, FaUser } from 'react-icons/fa'; // Import the Phone icon from react-icons/fa
import { FaFacebook } from 'react-icons/fa'; // Import the Facebook icon from react-icons/fa

const Header = () => {
    return (
        <nav className="navbar">
            <div className="left-section">
                 <FaUser />
                <span> AL2 - Loan Consultant</span>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#loan-info">Requirements</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="https://www.facebook.com/LoansForPensioners?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            </ul>
            <div className="right-section">
                <FaPhone />
                <span> 09277211555 / 09198059300</span>
            </div>
        </nav>
    );
}

export default Header;
