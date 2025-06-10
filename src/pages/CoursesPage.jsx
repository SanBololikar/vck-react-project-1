import { Link } from 'react-router-dom'
import './CourcesPage.css'

const CoursesPage = () => {
    return (
        <div>
            <div >
                <h1 id='Courcesh1'>Our Academic Programs</h1>
                <br /><br />
                <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                <br />
                <h2>Discover Campus Life</h2>
                <br />
                <video src="/Videos/v1.mp4" controls loop width='750px'></video>
                <br /><br />
                <h2>Undergraduate Programs (UG)</h2>
                <hr />
                <ul>
                    <li><b>Bachelor of Science (B.Sc.)</b>
                        <ul>
                            <li>Computer Science (3 years)</li>
                            <li>Information Technology (3 years)</li>
                            <li>Biotechnology (3 years)</li>
                        </ul>
                    </li><br />
                    <li><b>Bachelor of Commerce (B.Com)</b>
                        <ul>
                            <li>Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>
                        </ul>
                    </li><br />
                    <li><b>Bachelor of Arts (B.A.)</b>
                        <ul>
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                        </ul>
                    </li>
                </ul>
                <br />
                <h2>Postgraduate Programs (PG)</h2>
                <hr />
                <ul>
                    <li><b>Master of Science (M.Sc.)</b>
                        <ul>
                            <li>Computer Science (2 years)</li>
                            <li>Information Technology (2 years)</li>
                        </ul>
                    </li><br />
                    <li><b>Master of Commerce (M.Com) (2 years)</b></li><br />
                    <li><b>Master of Arts (M.A.) (2 years)</b></li>
                </ul>
                <br />

                <h2>Program Details & Fee Structure (Annual)</h2>
                <hr />
                <table border="1">
                    <tr>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>
                        <th>Eligibility</th>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                </table>
                <br />
                <h2>Specialized & Vocational Courses</h2>
                <hr />
                <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                <br />
                <div className='buttonCB'>
                <h5 >Have questions about a specific course?</h5>
                <Link to="/contactpage"><button className='buttonC'>Inquire About Cources</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CoursesPage