import './ContactPage.css'


const ContactPage = () => {
    return (
        <div>
          
            <div> 
                <h1 id='Contacth1'>Contact Us</h1>
                <br /><br />
                <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                <br />
                <h2>General Enquiries</h2>
                <hr />
                <b>Vivekanand College Main Campus</b>
                <br />
                <p>C.S No 2130, "E" ward, Tarabai Park, Kolhapur-416 003, Maharashtra, India</p>
                <p>Phone: **+91 12345 67890** <br />
                Email: **info@vivekanandcollege.edu** <br />
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
                <br />
                <h2>Admissions Office</h2>
                <hr />
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
                <br />
                <p>Phone: +91 98765 43210 <br />
                     Email: admissions@vivekanandcollege.edu</p>
                <br />
                <h2>Find Us on the Map</h2>
                <hr />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.748556587836!2d74.23603477367172!3d16.712355321903267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100664ad0e191%3A0x4b2af9253659bbec!2sVivekanand%20College!5e1!3m2!1sen!2sin!4v1749385179398!5m2!1sen!2sin" ></iframe>
                <br /><br />
                <h2>Send Us a Message</h2>
                <hr /><br /><br />
                <form id="contactForm">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea className='formfield' name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button className='cta-button' type="submit">Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default ContactPage