import { useState } from 'react';

function BookingForm(props) {
    ///I should try to put all of this state into the reducer function
    const today = new Date().toISOString('ISO', { timeZone: 'America/Chicago' }).split('T')[0];
    const [date, setDate] = useState(today);
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    };
    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
    
            <form onSubmit={handleSubmit}>
{/*               
                <label htmlFor='name'>Name:</label>
             
                <input
                        id="name"
                        type='text'
                        placeholder="Name"
                        name='name'
                        // value={name}
                        onChange={(e) => setName(e.target.value)}
                    /> */}
            
                    <label htmlFor="res-date">Choose date:</label>
            <input
                aria-label='select date for reservation'  
                type="date"
                min={today}
                id="res-date"
                value={date}
                onChange={(e) => {
                        handleDateChange(e.target.value)
                        }
                    }
                required />
           
                    <label htmlFor="res-time">Choose time:</label>
            <select
                aria-label='select time for reservation'
                id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                {props.availableTimes.availableTimes.map(availableTimes =>{
                    return <option key={availableTimes}>{availableTimes}</option>
                 })}
            </select>
           
                    <label htmlFor="guests">Number of guests:</label>
            <input  
                    style={{ width: "40px" }}
                    aria-label='select number of guests for reservation'  
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                />
      
                    <label htmlFor="occasion">Occasion:</label>
                <select
                    aria-label='select the occasion for reservation'    
                    id="occasion"
                    value={occasion}
                    onChange={(e)=>setOccasion(e.target.value)}>
                        <option>Date Night</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Just plain hungry</option>
                    </select>
                   
                    
           
            <input disabled={!time&&!guests&&!occasion } type="submit" value="Make Your reservation" />
            </form>
        );
    };

export default BookingForm;


//need to add validation and aria/accesibility options