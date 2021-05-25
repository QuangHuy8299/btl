import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selector';
import './styles.scss';
import Logo from './../../Asset/logo.jpg';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
})

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);
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
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav>
        <div className="callToActions">
          <ul>
            <li>
              <Link>
                Your cart ({totalNumCartItems})
            </Link>
            </li>
            {currentUser && [
              <li>
                <Link to="/dashboard">
                  My account
                </Link>
              </li>,
              <li>
                <span onClick={() => signOut()}>
                  LogOut
                </span>
              </li>
            ]}
            {!currentUser && [
              <li>
                <Link to="/registration">
                  Register
              </Link>
              </li>,
              <li>
                <Link to="/login">
                  Login
              </Link>
              </li>
            ]}
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentUser: null
}

export default Header;
