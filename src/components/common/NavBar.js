import React from 'react';
import {Link} from 'react-router-dom';

// import needed images
import logo from '../../assets/images/relayr.png';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='container flex'>
        <div className='nav-logo'>
          <img src={logo} />
        </div>
        <div className='nav-menu'>
          <li><Link to='/'>Dash</Link></li>
          <li><Link to={{pathname: '/about'}}>Who i am</Link></li>
        </div>
      </div>
    </div>
  )
};

export default Navbar;