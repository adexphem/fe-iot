import React from 'react';
import {Link} from 'react-router-dom';

// import needed images
import logo from '../../assets/images/relayr.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container flex'>
        <div className='brand'>
          <img src={logo} />
        </div>
        <div className='footer-links'>
        Hello
        </div>
      </div>
    </div>
  )
};

export default Footer;