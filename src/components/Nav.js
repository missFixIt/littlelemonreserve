import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import hamburgerIcon from '../images/icon_hamburger_menu.svg';

function Nav (){

        const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
                setMenuOpen(!menuOpen);
        }

        return (
               <nav className={`nav ${menuOpen ? "open" : ""}`}>
                        <div className='hamburger-menu' onClick={toggleMenu}>
                        <img src={hamburgerIcon} alt="open menu icon"/>
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