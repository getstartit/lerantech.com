import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (

    <header className="header common-bg-color">
      <div className="logo-container">
        <img src="/image/l_t-nobg.png" alt="logo" onClick={()=>navigate('/')} />
        <div className="text-container">
          <h1 className="heading-64">Learn Tech IT Solutions</h1>
          <p className="para-17"><i>Shape Your Career</i></p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex justify-content-center">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse nav-bar-margin justify-content-center"
            id="navbarNav"

          >

            <ul className="navbar-nav text-center" data-aos="fade-left">
              {[
                { path: '/', label: 'Home', scroll: 'carouselMain' },
                { path: '/about-us', label: 'About Us', scroll: 'about-section' },
                { path: '/courses', label: 'Courses', scroll: 'course-section' },
                { path: '/placements', label: 'Placements', scroll: 'placements-section' },
                { path: '/testimonials', label: 'Testimonials', scroll: 'testimonaial-section' },
                { path: '/contact-us', label: 'Contact Us', scroll: 'contact-section' },
              ].map(({ path, label, scroll }) => (
                <li className="nav-item" key={path}>
                  {/* Navigation links for page routing */}
                  <a
                    className={`nav-link btn-pointer ${location.pathname === path ? 'active' : ''}`}
                    onClick={() => navigate(path)} // Page routing
                    href={`#${scroll}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
