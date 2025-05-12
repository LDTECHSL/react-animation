import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../NAVBAR/styles/navbar.css"
import logo from "../NAVBAR/images/logo.png"

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string): boolean => location.pathname === path;

    const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        <header className="header">
            <div className="container flex items-center justify-between">
                <img style={{ width: '80px' }} src={logo} alt="Logo" />
                
                <button className="menu-toggle md:hidden" onClick={toggleMenu}>
                    ☰
                </button>

                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''} md:flex`}>
                    <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link to="/resorts" className={`nav-link ${isActive('/resorts') ? 'active' : ''}`}>Resorts</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
