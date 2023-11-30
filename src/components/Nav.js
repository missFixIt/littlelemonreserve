import { Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';
import hamburgerIcon from '../images/icon_hamburger_menu.svg';

function Nav (){

        const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
                setMenuOpen(!menuOpen);
        }

        return (
               <nav className={`nav ${menuOpen ? "open" : ""}`}>
                        <div className='hamburger-menu' className={`nav-hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <img src={hamburgerIcon} alt="open menu icon"/>
                        </div>
                <NavLink to="/" className={`nav-item ${menuOpen ? "open" : ""}`} activeClassName="active">Home</NavLink>
                <NavLink to="/about" className={`nav-item ${menuOpen ? "open" : ""}`} activeClassName="active">About</NavLink>
                <NavLink to="/menu" className={`nav-item ${menuOpen ? "open" : ""}`}>Menu</NavLink>
                <NavLink to="/reservations" className={`nav-item ${menuOpen ? "open" : ""}`}>Reservations</NavLink>
                <NavLink to="/order" className={`nav-item ${menuOpen ? "open" : ""}`}>Order Online</NavLink>
                <NavLink to="/login" className={`nav-item ${menuOpen ? "open" : ""}`}>Login</NavLink>
                </nav>
    );
  }

  export default Nav;