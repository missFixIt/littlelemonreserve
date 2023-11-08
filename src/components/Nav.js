import { Route, Routes, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
//import Reservations from './BookingPage';

function Nav() {

    return (
            <nav className="nav">
            <Link to="/" classname="nav-item">Home</Link>
            <Link to="/about" classname="nav-item">About</Link>
            <Link to="/menu" classname="nav-item">Menu</Link>
            <Link to="/reservations" classname="nav-item">Reservations</Link>
            <Link to="/order" classname="nav-item">Order Online</Link>
            <Link to="/login" classname="nav-item">Login</Link>

            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/order" element={<Menu />} />
                <Route path="/login" element={<Login/>} /> */}
            </Routes>
        </nav>
    );
  }

  export default Nav;