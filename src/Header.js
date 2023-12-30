import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';
import MagnifyingGlassIcon from './assets/magnifying-glass-svgrepo-com.svg';


function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/aboutme">About Me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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
