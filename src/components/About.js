import React from 'react';
import profile from '../assests/images/profile.png';
import { ReactComponent as Download } from '../assests/assets/download.svg';
import '../scss/main.scss';

import CV from '../assests/CV.docx';

const About = () => {
  return (
    <div data-aos="zoom-in-down" className="section-about" id="about">
      <div className="section-header"> About</div>
      <div className="section-about__container">
        <div className="about-image">
          <img className="profile-pic" src={profile} alt="profile" />
        </div>
        <div className="about-text">
          <h3 className="about-text-primary">Myself</h3>
          <p className="about-text-secondary">
            A web developer with a passion in developing the MERN Stack and
            loves working with software that matters.
          </p>{' '}
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
