import React from 'react';

function Nav() {
  return (
  <nav className='nav'>
      <img className='nav-logo' src={process.env.PUBLIC_URL + "/images/airbnb.png"} alt="airbnb" />
  </nav>
  )
}

export default Nav;
