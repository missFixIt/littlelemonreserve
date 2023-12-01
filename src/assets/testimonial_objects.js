import tom from '../images/tom.jpg';
import dick from '../images/dick.jpg';
import harry from '../images/harry.jpg';

const testimonial_objects = [
    {
        id: 1,
        name: "Tom Jones",
        image: tom,
        quote: "...excellent!",
        description:"The traditional Greek salad of sliced cucumbers, tomatoes, green bell pepper, red onion, Kalamata olives, pepperoncini, and feta cheese, and tossed with your signature dressing, was excellent! Phew."
    },
    {
        id: 2,
        name: "Dick Van Dyke",
        image: dick,
        quote: "...rubbed with garlic...",
        description:"Grilled bread rubbed with garlic, olive oil and salt, topped with fresh chopped tomatoes and herbs. My fave."
    },
    {
        id: 3,
        name: "Harry Belafonte",
        image: harry,
        quote: "...delicious...moist...",
        description:"Light, fluffy, and deliciously tangy, with two layers of moist lemon-flavored cake coated in a rich lemon-flavored cream cheese frosting. What more can I say?"
    }
]

export default testimonial_objects;
export { tom, dick, harry };
