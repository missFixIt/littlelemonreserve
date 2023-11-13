import { Link } from 'react-router-dom';

// import Home from './Home';
// import About from './About';
// import Menu from './Menu';
// import BookingPage from './BookingPage';
// import Login from './Login';

function Nav() {

    return (
            <nav className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/reservations" className="nav-item">Reservations</Link>
            <Link to="/order" className="nav-item">Order Online</Link>
            <Link to="/login" className="nav-item">Login</Link>
            </nav>
    );
  }

  export default Nav;