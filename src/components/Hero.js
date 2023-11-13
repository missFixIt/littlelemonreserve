import herophoto from '../images/restaurantfood.jpg';

function Hero() {
    return (
        <div className="hero">
            <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist</p>
                <button className="button" href="/reservations">Reserve a Table</button>
            </div>
            <div><img src={herophoto} alt="Little Lemon food"/></div>
        </div>
        
    
    )

};
export default Hero;