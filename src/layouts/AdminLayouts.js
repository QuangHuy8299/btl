import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../redux/User/user.actions';
import VerticalNav from './../components/VerticalNav';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from '@material-ui/icons/Category';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TableChartIcon from '@material-ui/icons/TableChart';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import "./css/style.scss";

const AdminLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">

      <div className="controlPanel">
        <div className="sidebar col-lg-2 d-none d-lg-block">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">
                  <DashboardIcon />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product-admin">
                  <TableChartIcon />
                  Product
                </Link>
              </li>
              <li>
                <Link to="/categories-admin">
                  <CategoryIcon />
                  Category
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  <ExitToAppIcon />
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content col-lg-10 d-none d-lg-block">
          <div className="container-fluid no-gutters">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="header_iner d-flex justify-content-between align-items-center">
                  <div className="serach_field-area"></div>
                  <div className="header_right d-flex justify-content-between align-items-center">
                    <div className="header_notification_warp d-flex align-items-center">
                      <li>
                        <Link className="bell_notification_clicker">
                          <NotificationsNoneIcon />
                          <span>04</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="bell_notification_clicker">
                          <MailOutlineIcon />
                          <span>04</span>
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {props.children}
        </div>
      </div>

    </div>
  );
};

export default AdminLayout;