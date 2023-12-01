import greeksalad from '../images/greek salad.jpg';
import lemon_dessert from '../images/lemon dessert.jpg';
import bruschetta from '../images/bruchetta.svg';

const food_items = [
    {
        id: 1,
        dish: "Greek Salad",
        price: 12.99,
        image: greeksalad,
        description:"A traditional Greek salad of sliced cucumbers, tomatoes, green bell pepper, red onion, Kalamata olives, pepperoncini, and feta cheese, and tossed with our signature dressing."
    },
    {
        id: 2,
        dish: "Bruschetta",
        price: 7.99,
        image: bruschetta,
        description:"Grilled bread rubbed with garlic, olive oil and salt, topped with fresh chopped tomatoes and herbs."
    },
    {
        id: 3,
        dish: "Lemon Dessert",
        price: 5.99,
        image: lemon_dessert,
        description:"Light, fluffy, and deliciously tangy, with two layers of moist lemon-flavored cake coated in a rich lemon-flavored cream cheese frosting."
    },
]

export default food_items;
export { greeksalad, bruschetta, lemon_dessert };
