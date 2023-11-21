import BookingForm from "./BookingForm";
import { useState } from 'react';
function BookingPage(props) {

    const dropDownTimes = props.times.map((t) => <option>{t}</option>);
    return (
        
        <article className="booking">
            <h1>Book a table with us!</h1>
            {/* trying to do children props here  */}
            <BookingForm title={props.greeting}times={dropDownTimes} />
        </article>
        
        
        )
}

export default BookingPage;