import BookingForm from "./BookingForm";



function BookingPage(props) {
  
    return (
    <section className="booking">
            <h2>Book a table with us</h2>
            <p>First, choose a date, time, and number in your party. We'll get your contact info on the next page.</p>
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
            {/* ///gotta be a better way to pass these children props... */}
    </section>
    );
};

export default BookingPage;