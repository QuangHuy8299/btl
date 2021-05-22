import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions'
import './styles.scss';
import Logo from './../../Asset/logo.jpg';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const signOut = () => {
    dispatch(signOutUserStart());
  }

  return (
    <header className="header">
      <div className="warp">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Simple Logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">
                  My account
              </Link>
              </li>
              <li>
                <span onClick={() => signOut()}>
                  LogOut
              </span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">
                  Register
              </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
              </Link>
              </li>
            </ul>
          )}

        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentUser: null
}

export default Header;
