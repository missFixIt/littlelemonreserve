import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useReducer } from 'react';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Main from './components/Main';
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
        <Route path="reservations/*" element={<Main />} />
        <Route path="order" element={<Menu />} />
        <Route path="login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
