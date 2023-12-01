import { Link } from "react-router-dom";

function FeaturedItemCard(props) {
        return (
            <div className='featured-item-card' key={props.id}>
                <section><img src={props.image}/>
                <div className="heading">
                    <div className="title">{props.dish}</div>
                    <div className="price">${props.price}</div>
                </div>
                    <div className="description"><p>{props.description}</p></div>
                </section>
                <Link to="/order"><button className="button" >Order Now</button></Link>
            </div> 
        )

};
export default FeaturedItemCard;