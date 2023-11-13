import logo from "../logo.svg";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="the Little Lemon logo" />
            
        <nav className="footer-nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/reservations" className="nav-item">Reservations</Link>
            <Link to="/order" className="nav-item">Order Online</Link>
            <Link to="/login" className="nav-item">Login</Link>
            </nav>
        </div>
    )

};

export default Footer;