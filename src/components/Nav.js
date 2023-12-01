import { Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';
import hamburgerIcon from '../images/icon_hamburger_menu.svg';
import closeIcon from '../images/icon_close_menu.svg';
function Nav (){

        const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
                setMenuOpen(!menuOpen);
        }

        return (
                <>
                <div className={`nav-hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                {menuOpen? <img src={closeIcon} alt="close menu button"/> : <img src={hamburgerIcon} alt="open menu button"/>} 
                 </div>
               <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    
                <NavLink to="/" className={`nav-item ${menuOpen ? "open" : ""}`} activeClassName="active" onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/about" className={`nav-item ${menuOpen ? "open" : ""}`} activeClassName="active" onClick={toggleMenu}>About</NavLink>
                <NavLink to="/menu" className={`nav-item ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>Menu</NavLink>
                <NavLink to="/reservations" className={`nav-item ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>Reservations</NavLink>
                <NavLink to="/order" className={`nav-item ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>Order Online</NavLink>
                <NavLink to="/login" className={`nav-item ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>Login</NavLink>
                        </nav>
                        </>
    );
  }

  export default Nav;