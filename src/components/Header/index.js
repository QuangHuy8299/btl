import React from 'react';
import './styles.scss';
import Logo from './../../Asset/logo.jpg'

const Header = props => {
  return(
    <header className="header"> 
      <div className="warp">
        <div className="logo">
          <img src={Logo} alt="Simple Logo"/>
        </div>
      </div>
    </header>
  )
}

export default Header;
