import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../redux/User/user.actions';

import Header from './../components/Header';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/Footer';

const DashBoardLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel section-space--ptb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 order-md-1 order-2  small-mt__40">
              <div className="sidebar">
                <VerticalNav>
                  <ul>
                    <li>
                      <Link to="/dashboard">
                        Home
                </Link>
                    </li>
                    <li>
                      <span className="signOut" onClick={() => signOut()}>
                        Sign Out
                </span>
                    </li>
                  </ul>
                </VerticalNav>
              </div>
            </div>
            <div className="col-lg-9 col-md-9  order-md-2 order-1">
              <div className="content">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;