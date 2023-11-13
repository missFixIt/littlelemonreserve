import { useState } from 'react';



function BookingForm() {
   
    const [name, setName] = useState("");
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState("");
    
    const handleSubmit = (e) => {
            e.preventDefault();
            alert("Booked!");
    };
    
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
        const dropDownTimes = availableTimes.map((time) => <option>{time}</option>);

        return (
            <form onSubmit={handleSubmit}>
              
                <label htmlFor='name'>Name:</label>
             
                    <input
                        type='text'
                        placeholder="Name"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
             
                    <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={setDate} onClick={(e)=> console.log ({date})} />
                 
                    <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time "
                    name='time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {dropDownTimes}</select>
                
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
    
        );
    };

export default BookingForm;