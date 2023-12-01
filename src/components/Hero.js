import herophoto from '../images/restaurantfood.jpg';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <article className="hero">
           
            <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist</h3>
               <Link to="/reservations"><button className="button" >Reserve a Table</button></Link>
            </div>
            <div><img src={herophoto} alt="Little Lemon food"/></div>
        </article>
        
    
    )

};
export default Hero;