import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Login from './components/Login.js';
import BookingPage from './components/BookingPage.js';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="container">
      <Header />
    
       <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/reservations" element={<BookingPage />} />
  <Route path="/order" element={<Menu />} />
  <Route path="/login" element={<Login/>} />
</Routes>
      <Footer />
            
    </div>
  );
}

export default App;
