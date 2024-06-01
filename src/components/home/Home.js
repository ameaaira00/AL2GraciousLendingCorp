import React from 'react';
import backgroundImage from '../../assets/Photo-by-Marcus-Aurelius.jpg';
import "./Home.css";

const Home = () => {
    return (
        <div className='home' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="highlight-container">
                <div className="interest">
                    <h1>1.8%</h1>
                    <h2>interest rate</h2>
                </div>
                <p className="info">All New Clients & Renewed Clients can avail</p>
                <p className="small-info">Promo Valid from January 01 to December 31, 2024</p>
            </div>
        </div>
    );
}

export default Home;
