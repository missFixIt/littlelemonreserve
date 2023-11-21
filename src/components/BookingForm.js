//import React from 'react';
import { useState } from 'react';



function BookingForm(props) {
    const today = new Date();
    const formattedDate = today.toISOString();
    const todaysDate = formattedDate.slice(0, 10);
    // const todaysDate = today.toDateString("en", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
        
    // });
    // // const formattedDate = () => {
        
    // //     return ({ todaysDate.year } + "-" + { todaysDate.month } + "-" + {todaysDate.day} )
    // // };
    //console.log({ todaysDate });
   
    
    
    const [name, setName] = useState("");
    const [date, setDate] = useState({ todaysDate });
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
            e.preventDefault();
        alert("Booked!");
    };


    return (
        <>
            <h1>{props.title}</h1>
            <form onSubmit={handleSubmit}>
              
                <label htmlFor='name'>Name:</label>
             
                <input
                        id="name"
                        type='text'
                        placeholder="Name"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
             
                    <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
                 
                    <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name='time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                 {props.times}
                </select>
                
                    <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)} />
               
                    <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e)=>setOccasion(e.target.value)}>
                        <option>Date Night</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Just plain hungry</option>
                    </select>
                   
                    <input type="submit" value="Make Your reservation" />
                
            </form>
            </>
        );
    };

export default BookingForm;