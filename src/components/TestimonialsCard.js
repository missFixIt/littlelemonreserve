import five_stars from "../images/5_stars.svg";

function TestimonialsCard(props) {
    return (
        <div className='testimonials-card' key={props.id}>
            <section>
               <div className="customer-photo"> <img src={props.image} alt="{props.name}"/></div>
                <hgroup className="heading">
                    <h4 className="name">{props.name}</h4>
                    <br/>
                    <h3 className="quote">"{props.quote}"</h3>
                </hgroup>
                <div className="description">
                    <p>"{props.description}"</p>
                </div>
            </section>
            <div><img src={five_stars} alt="a graphic of five golden stars"/></div>
            
        </div>
    )

};
export default TestimonialsCard;