import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className="header">
      <nav>
        <ul className={isSidebarVisible ? 'sidebar' : 'sidebar hidden'}>
          <li onClick={hideSidebar}>
            <Link to="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </Link>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutpage">About</Link></li>
          <li><Link to="/coursespage">Courses</Link></li>
          <li><Link to="/contactpage">Contact</Link></li>
          <li><Link to="/admissionspage"><button className="buttonB">Apply Now!</button></Link></li>
        </ul>
        <ul>
          <li><Link to="/" className="logo"><h2>Vivekanand College</h2></Link></li>
          <li className="hideOnMobile"><Link to="/">Home</Link></li>
          <li className="hideOnMobile"><Link to="/aboutpage">About</Link></li>
          <li className="hideOnMobile"><Link to="/coursespage">Courses</Link></li>
          <li className="hideOnMobile"><Link to="/contactpage">Contact</Link></li>
          <li className="hideOnMobile"><Link to="/admissionspage"><button className="buttonB">Apply Now!</button></Link></li>
          <li className="menu-button" onClick={showSidebar}>
            <Link to="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

