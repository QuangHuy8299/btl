import React from 'react';
import './styles.scss';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from './../../Asset/logo.jpg'

const Footer = props => {
  return (
    <div className="footer-area-wrapper">
      <div className="footer-area section-space--ptb_120">
        <div className="container">
          <div className="row footer-widget-wrapper">
            <div className="col-lg-4 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Address</h6>
              <ul className="footer-widget__list">
                <li>
                  <RoomIcon />
                  Hai Ba Trung, Ha Noi, Viet Nam 2021
                </li>
                <li>
                  <PhoneIcon />
                  +0853806740
                </li>
                <ul className="list footer-social-networks mt-25">
                  <li className="item">
                    <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="item">
                    <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="item">
                    <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">
                Help & Information
              </h6>
              <ul className="footer-widget__list">
                <li>
                  <Link to="/contact" className="hover-style-link">Help & Contact Us</Link>
                </li>
                <li>
                  <Link to="/" className="hover-style-link">Returns & Refunds</Link>
                </li>
                <li>
                  <Link to="/" className="hover-style-link">Online Stores</Link>
                </li>
                <li>
                  <Link to="/" className="hover-style-link">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">
                About Us
              </h6>
              <ul className="footer-widget__list">
                <li>
                  <Link to="/about_us" className="hover-style-link">About Us</Link>
                </li>
                <li>
                  <Link to="/" className="hover-style-link">Returns & Refunds</Link>
                </li>
                <li>
                  <Link to="/" className="hover-style-link">What We Do</Link>
                </li>
                <li>
                  <Link to="/" className="hover-style-link">FAQ Page</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">
                Newsletter
              </h6>
              <div className="footer-widget__newsletter mt-30">
                <input type="text" placeholder="Your email address" />
                <button className="submit-button">
                  <i className="icon-arrow-right"></i>
                </button>
              </div>
              <ul className="footer-widget__footer-menu  section-space--mt_60 d-none d-lg-block">
                <li>
                  <Link to="/">
                    Term & Condition
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Policy
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 text-center text-md-left">
              <div className="footer-widget__footer-menu">
                <ul className="footer-widget__footer-menu">
                  <li>
                    <Link to="/">
                      Term & Condition
                  </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Policy
                  </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Map
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-2 text-center">
              <div className="footer-logo">
                <Link to="/">
                  <img src={Logo} style={{ width: '50%' }} />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 order-md-3">
              <div className="footer-bottom-social">
                <h6 className="title">Follow Us On Social</h6>
                <ul className="list footer-social-networks">
                  <li className="item">
                    <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="item">
                    <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="item">
                    <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <span className="copyright-text text-center  section-space--mt_40">
                © 2020 Helendo. <Link to="/" className="">All Rights Reserved.</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;