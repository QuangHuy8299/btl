import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from './../../redux/Cart/cart.selector';
import { selectWishListItemsCount } from './../../redux/WishList/wishList.selector';
import './styles.scss';
import Logo from './../../Asset/logo.jpg';
import AdminToolbar from '../AdminToolBar';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
  totalNumWishListItems: selectWishListItemsCount(state)
})

const Header = props => {
  const { currentUser, totalNumCartItems, totalNumWishListItems } = useSelector(mapState);
  const dispatch = useDispatch();

  return [
    <header className="header-area header_absolute header_height-90 header-sticky is-sticky">
      <AdminToolbar />
      <div className="container-fluid container-fluid--cp-100">
        <div className="row align-items-center">
          <div className="col-lg-3 col-lg-3 col-6">
            <div className="logo text-left">
              <Link to="/">
                <img src={Logo} alt="Simple Logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-lg-6  d-none d-lg-block">
            <div className="header__navigation d-none d-lg-block">
              <nav className="navigation-menu">
                <ul className="justify-content-center">
                  <li className="has-children has-children--multilevel-submenu">
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="has-children has-children--multilevel-submenu">
                    <Link to="/search">
                      <span>Product</span>
                    </Link>
                  </li>
                  <li className="has-children has-children--multilevel-submenu">
                    <Link to="/about_us">
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li className="has-children has-children--multilevel-submenu">
                    <Link to="/blog">
                      <span>Blog</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 col-lg-3 col-6">
            <div className="header-right-side text-right">
              <div className="header-right-items d-none d-md-block">
                {currentUser && [
                  <Link to="/dashboard" className="header-cart">
                    <i className="icon-user"></i>
                  </Link>
                ]}
                {!currentUser && [
                  <Link to="/login" className="header-cart">
                    <i className="icon-user"></i>
                  </Link>
                ]}
              </div>
              <div className="header-right-items d-none d-md-block">
                <Link to="/wishList" className="header-cart">
                  <i className="icon-heart"></i>
                  <span className="item-counter">{totalNumWishListItems}</span>
                </Link>
              </div>
              <div className="header-right-items">
                <Link to="/cart" className=" header-cart minicart-btn toolbar-btn header-icon">
                  <i className="icon-bag2"></i>
                  <span className="item-counter">{totalNumCartItems}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  ]
}

Header.defaultProps = {
  currentUser: null
}

export default Header;
