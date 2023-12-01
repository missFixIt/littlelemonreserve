import testimonial_objects from '../assets/testimonial_objects';
import TestimonialsCard from './TestimonialsCard';


function Testimonials() {
      return (
        <article className='testimonials'>
              <div><h1>What Our Customers Say</h1></div>
              
                  <div className='single-testimonial'>
                      {testimonial_objects.map((item) => <TestimonialsCard key={item.id} image={item.image} description={item.description} name={item.name} quote={item.quote} />)} 
                    </div>
          </article>
      );
};
export default Testimonials;