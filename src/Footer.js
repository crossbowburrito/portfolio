// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="search-container">
                    <form action="/search" method="get">
                        <input type="search" placeholder="Search..." name="search" />
                        <button type="submit">🔍</button>
                    </form>
                    </div>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
