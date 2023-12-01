import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Order from './components/Order';
import Reservations from './components/Reservations';
import ConfirmedBooking from './components/ConfirmedBooking';
import Login from './components/Login';



function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations/*" element={<Reservations />} />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
