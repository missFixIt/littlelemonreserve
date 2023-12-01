import photo1 from '../images/Mario and Adrian A.jpg';

function About() {

    return (
        <article className="about">
            <h1>Little Lemon's Story</h1>
           <div className='layout' >
            <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean et tortor. Vulputate sapien nec sagittis aliquam malesuada bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Scelerisque viverra mauris in aliquam sem fringilla ut.</p>
                    <p>Facilisis gravida neque convallis a cras semper auctor neque vitae. Tempus iaculis urna id volutpat lacus laoreet non. Amet massa vitae tortor condimentum. Id nibh tortor id aliquet lectus proin nibh nisl. Mauris nunc congue nisi vitae suscipit tellus mauris a diam.</p>
                    
            </div>
            <div className="photos" >
            <img src={photo1}  alt="Mario and Adrian, the owners of Little Lemon, laughing in the kitchen"/>
                </div>
                </div>
        </article>
    )
};
export default About;