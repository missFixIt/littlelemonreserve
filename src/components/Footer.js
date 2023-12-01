import logo from "../images/Asset 20@4x.png";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="logo"><a href="/"><img src={logo} alt="the Little Lemon logo" /></a></div>
            
            <nav className="footer-nav">
                <ul>
           <li><Link to="/" className="nav-item">Home</Link></li>
           <li><Link to="/about" className="nav-item">About</Link></li>
           <li><Link to="/menu" className="nav-item">Menu</Link></li> 
           <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
           <li><Link to="/order" className="nav-item">Order Online</Link></li>
           <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </nav>
            <nav className="footer-nav-contact">
            
                <h5>Address</h5>
                <address>167 N. Windy St.</address>
                <address>Chicago, IL 93904</address>

                <h5>Phone</h5>
                <p aria-label="Little Lemon's phone number"> 555-555-5555</p>

                <h5>Email</h5>
                <p><a href="mailto:info@LittleLemon.com">info@LittleLemon.com</a></p>
            </nav>
            <nav className="footer-nav-socials">
            <SocialIcon as="div" url="http://www.facebook.com"/>
            <SocialIcon as="div" url="http://www.instagram.com" />

            </nav>
                




        </footer>
    )

};

export default Footer;