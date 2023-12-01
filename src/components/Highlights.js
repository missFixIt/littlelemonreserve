import food_items from '../assets/food_items';
import FeaturedItemCard from './FeaturedItemCard';

function Highlights() {
      return (
        <article className='highlights'>
                  <div><h1>This Week's Specials</h1></div>
                  <div className='featured-items'>
                      {food_items.map((item) => <FeaturedItemCard key={item.id} image={item.image} description={item.description} dish={item.dish} price={item.price} />)} 
                    </div>
          </article>
      );
};
export default Highlights;