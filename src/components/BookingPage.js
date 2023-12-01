function BookingPage({children}) {
    return (
    <section className="booking">
            <h2>Book a table with us</h2>
            {children} 
    </section>
    );
};

export default BookingPage;