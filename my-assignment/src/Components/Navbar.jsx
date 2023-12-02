import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="" />
            </div>
            <div className="navValue">
                <div className="navLinks">
                    <span>Features</span>
                    <span className='dot'>.</span>
                    <span>FAQ</span>
                    <span className='dot'>.</span>
                    <span>Pricing</span>
                    <span className='dot'>.</span>
                    <span>Testimonials</span>
                </div>
                <button className="templateButton">Buy Template</button>
            </div>
        </div>
    )
}

export default Navbar