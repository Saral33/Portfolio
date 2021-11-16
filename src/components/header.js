import React from 'react';
import Typewriter from 'typewriter-effect';
import '../scss/main.scss';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__nav">
        <Navbar />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hi,</span>

          <span className="heading-primary--main">
            {' '}
            I'm <span style={{ color: '#e67e22' }}>Saral</span>
          </span>
          <span className="heading-primary--sub">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Web Developer').start();
              }}
            />
          </span>
        </h1>
        <div className="btn">
          {' '}
          <a className="contact-btn" href="mailto:princesaral2013@gmail.com">
            Contact
          </a>
        </div>
        <div className="social-media-links">
          <a
            className="social-icons-fb"
            href="https://www.facebook.com/prince.saral.9/"
          >
            <i
              style={{ fontSize: '2rem' }}
              className="devicon-facebook-plain"
            ></i>
          </a>
          <a
            className="social-icons-linkedin"
            href="https://www.linkedin.com/in/saral-karki-0572481aa/"
          >
            <i
              style={{ fontSize: '2rem' }}
              className="devicon-linkedin-plain"
            ></i>
          </a>
          <a className="social-icons-github" href="https://github.com/Saral33">
            <i
              style={{ fontSize: '2rem' }}
              className="devicon-github-original"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
