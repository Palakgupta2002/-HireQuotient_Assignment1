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
                    <a href="#features">
                        <span>Features</span>
                    </a>
                    <span className='dot'>.</span>
                    <a href="#faq">
                        <span>FAQ</span>
                    </a>
                    <span className='dot'>.</span>
                    <a href="#pricing">
                        <span>Pricing</span>
                    </a>
                    <span className='dot'>.</span>
                    <a href="#testimonials">
                        <span>Testimonials</span>
                    </a>
                </div>
                <button className="templateButton">Buy Template</button>
            </div>
        </div>
    )
}

export default Navbar