import Nav from './Nav.js';
import logo from "../logo.svg";
import '../App.css';
function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="the Little Lemon logo" />
            <Nav/>
        </div>
    );
  }

  export default Header;