import React from 'react';
import './styles.scss';
import Logo from './../../Asset/logo.jpg';
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header className="header">
      <div className="warp">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Simple Logo" />
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">
                Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
