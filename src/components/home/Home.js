import React from 'react';
import backgroundImage from '../../assets/Photo-by-Marcus-Aurelius.jpg';
import "./Home.css";

const Home = () => {
    return (
        <div id="home" className='home' style={{ backgroundImage: `url(${backgroundImage})` }}>
           <div className="overlay"></div> 
            <div className="highlight-container">
                <div className="interest">
                    <h1>Kailangan ng Tulong Pinansyal?</h1>
                    <h2>Sagot namin 'yan sa <br/>1.8% interest rate lang!</h2>
                </div>
                <a href="#loan-info" className="inquire-button">Inquire Now</a>
                <p className="info">All New Clients & Renewed Clients can avail</p>
                <p className="small-info">Promo Valid from January 01 to December 31, 2024</p>
            </div>
        </div>
    );
}

export default Home;
