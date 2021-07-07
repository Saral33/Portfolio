import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex">
        <h1 className="footer__heading">Thank you for visiting</h1>
        <div className="links">
          <a
            className="social-icons-fb social-icons-i"
            href="https://www.facebook.com/prince.saral.9/"
          >
            <i
              style={{ fontSize: '2rem' }}
              className="devicon-facebook-plain"
            ></i>
          </a>
          <a
            className="social-icons-linkedin social-icons-i"
            href="https://www.linkedin.com/in/saral-karki-0572481aa/"
          >
            <i
              style={{ fontSize: '2rem' }}
              className="devicon-linkedin-plain"
            ></i>
          </a>
          <a
            className="social-icons-github social-icons-i"
            href="https://github.com/Saral33"
          >
            <i
              style={{ fontSize: '2rem' }}
              className="devicon-github-original"
            ></i>
          </a>
        </div>
        <h2 className="footer__heading" style={{ marginTop: '20px' }}>
          &copy; 2021. My portfolio
        </h2>
      </div>
    </div>
  );
};

export default Footer;
