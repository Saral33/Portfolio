import React from 'react';
import profile from '../assests/images/profile.jpg';
import { ReactComponent as Download } from '../assests/assets/download.svg';
import '../scss/main.scss';

import CV from '../assests/cv.pdf';

const About = () => {
  return (
    <div className="section-about" id="about">
      <div className="section-header"> About Me</div>
      <div data-aos="zoom-in-down" className="section-about__container">
        <div className="about-image">
          <div className="profile-pic-container">
            <img className="profile-pic" src={profile} alt="profile" />
          </div>
        </div>
        <div className="about-text">
          <p className="about-text-secondary">
            I am a web developer with a passion in developing the MERN Stack and
            loves working with software that matters. I get things done! I like
            building beautiful websites, fast and useful applications. I am fast
            learner, not afraid of taking my projects one step further, as I
            never stop until I am satisfied with the result. I believe that the
            little details are the key to a good website. I have worked both on
            frontend and backend development. Have a look at my CV.
          </p>
          <button
            className="about-btn"
            style={{ fontSize: '16px', marginTop: '25px' }}
          >
            <Download style={{ height: '15px' }} />
            <a
              style={{ textDecoration: 'none', color: '#fff' }}
              href={CV}
              download
            >
              {' '}
              Download My CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
