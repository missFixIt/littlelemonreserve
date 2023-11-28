import greeksaladphoto from '../images/greek salad.jpg';

function FeaturedItemCard({image, price, dish, dishdescription }) {
    return (
        <div
            style={{width:"200px", height:"400px", backgroundColor:"red"}}
        
        >
            <img src={image} width="200px" />
            <h3>{dish}</h3>
            <h4>{ price}</h4>
            <p>{dishdescription}</p>
        </div>
    )
};




function Highlights() {
    return (
        <FeaturedItemCard dishdescription={"Lettuce, tomato, feta, Greek olives, red onion, pepperoncini and our signature dressing."} image={greeksaladphoto} price={"$12.99"} dish={"Greek Salad"}/>
    )

};
export default Highlights;