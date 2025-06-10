import './HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
      <div>
        
        
        <div id='backgroundTitle'>
            <h1 id='h1'>Welcome to Vivekanand College!</h1><br />
            <h4 id='h4'>Your journey to excellence starts here.</h4><br />
            <Link to="/admissionspage" ><button className='buttonA'>Apply Now!</button></Link>
            <br />
        </div> 
        <br />
        <div>
            <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1964, we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped. </p>
            <br />
            <h2>Why Choose Vivekanand College?</h2>
            <hr />
            <ul>
                <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
            </ul>
            <br />
            <h2>Campus Life & Facilities</h2>
            <hr />
            <br />
            <img src="/Images/im1.jpg" alt="VivekanandImage1" className='imh' />
            <img src="/Images/im2.jpg" alt="VivekanandImage2" className='imh' />
            <br /><br />

            <h5 id='h5'>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</h5>
            <br />
            <div id='buttonHB'>
            <h5>Ready to explore our courses?</h5>
            <Link to="/coursespage" ><button className='buttonA'>Explore Courses</button></Link>
            </div>
        </div>
     </div>
    )
}

export default HomePage













