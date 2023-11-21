import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage';
import Login from './Login';

const Nav = () => {

        const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
                setMenuOpen(!menuOpen);
        }

        return (
               <nav className={`nav ${menuOpen ? "open" : ""}`}>
                        <div className='hamburger-menu' onClick={toggleMenu}>
                        <div className='hamburger-bar'></div>
                        <div className='hamburger-bar'></div>
                        <div className='hamburger-bar'></div>
                        </div>
                <Link to="/" className={`nav-item ${menuOpen ? "open" : ""}`}>Home</Link>
                <Link to="/about" className={`nav-item ${menuOpen ? "open" : ""}`}>About</Link>
                <Link to="/menu" className={`nav-item ${menuOpen ? "open" : ""}`}>Menu</Link>
                <Link to="/reservations" className={`nav-item ${menuOpen ? "open" : ""}`}>Reservations</Link>
                <Link to="/order" className={`nav-item ${menuOpen ? "open" : ""}`}>Order Online</Link>
                <Link to="/login" className={`nav-item ${menuOpen ? "open" : ""}`}>Login</Link>
                </nav>
    );
  }

  export default Nav;