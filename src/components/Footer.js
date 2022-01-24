import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer__contents">
        <h3>Copyright &copy; {year} Saral Karki</h3>
      </div>
    </div>
  );
};

export default Footer;
