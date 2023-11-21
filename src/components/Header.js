import Nav from './Nav.js';
import logo from "../logo.svg";
import '../App.css';
function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="the Little Lemon logo" />
            <Nav/>
        </header>
    );
  }

  export default Header;