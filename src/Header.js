import Nav from './Nav.js';
import logo from "./logo.svg";

function Header() {
    return (
        <>
            <img src={logo} alt="the Little Lemon logo" />
            <Nav/>
        </>
    );
  }

  export default Header;