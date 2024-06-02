import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo-name">TODOLOO</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">About us</a></li>
                <li><a href="/ContactUs">Contact Us</a></li>
                <li><a href="/Pomodoro">Pomodoro timer</a></li>
            </ul>
            <button className="sign-up-btn">SIGN UP</button>
            <button id="toggle-button" className="toggle-button">&#9776;</button>
        </nav>

    );
};

export default Navbar;
