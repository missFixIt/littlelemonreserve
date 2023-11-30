import BookingForm from "./BookingForm";



function BookingPage({children}) {
  
    return (
    <section className="booking">
            <h2>Book a table with us</h2>
            <p>First, choose a date, time, and number in your party. We'll get your contact info on the next page.</p>
            {children} 
        {/* <BookingForm/> */}
            {/* ///gotta be a better way to pass these children props... */}
            {/* availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} */}
            
    </section>
    );
};

export default BookingPage;