// Header.js
import React from 'react';
import './Header.css';
import MagnifyingGlassIcon from './assets/magnifying-glass-svgrepo-com.svg';


function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="search-container">
                    <form action="/search" method="get">
                        <input type="search" placeholder="Search..." name="search" />
                        <button type="submit">
                            <img src={MagnifyingGlassIcon} alt="Search" />
                        </button>

                    </form>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
