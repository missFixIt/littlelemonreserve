import './App.css';
import Header from './components/Header';
//import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import Login from './components/Login';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';

function App(props) {
  
  //code for the BookingForm component that has been lifted up to a higher level
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);
  //const availableTimes= ['17:00', '18:00', '19:00', '20:00', '21:00'];
  function updateTimes() {
    //function to change available times based on the selected date
    return(['17:00', '19:00', '21:00'])
  };
  function initializeTimes() {
    //which will create the initial state for the availableTimes
  };
  ///

  return (
    <div className="container">
      {/* <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />

      <Bag>
        <Apples color="yellow" number="5" />
      </Bag>
      <Bag>
        <Pears friend="Peter" />
      </Bag>

      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag> */}



      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage greeting="Hello!!!!" times={availableTimes} />} />
        <Route path="/order" element={<Menu />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
