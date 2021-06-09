import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { resetPasswordStart, resetUserState } from './../../redux/User/user.actions';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../froms/FromInput';
import Button from './../froms/Button/index'

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr
});

const EmailPassword = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      history.push('/login');
    }

  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }

  }, [userErr]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  }

  const configAuthWrapper = {
    headline: 'Email Password'
  };

  return [
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row breadcrumb_box  align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                <h2 className="breadcrumb-title">My Account</h2>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-6">
                <div className="breadcrumb-list text-center text-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    My Account
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="main-wrapper">
      <div className="site-wrapper-reveal border-bottom">
        <div className="my-account-page-warpper section-space--ptb_120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 ml-auto mr-auto">
                <div className="myaccount-box-wrapper">
                  <div className="helendo-tabs">
                    <ul className="nav" role="tablist">
                      <li className="tab__item nav-item active">
                        <Link to="/login" className="nav-link active" data-toggle="tab" href="#tab_list_06" role="tab" aria-selected="true">Login</Link>
                      </li>
                      <li className="tab__item nav-item">
                        <Link to="/registration" className="nav-link" data-toggle="tab" href="#tab_list_07" role="tab" aria-selected="false">Our Register</Link>
                      </li>

                    </ul>
                  </div>
                  <div className="tab-content content-modal-box">
                    <div className="tab-pane fade active show" id="tab_list_06" role="tabpanel">
                      <form action="#" className="account-form-box" onSubmit={handleSubmit}>
                        <h6>Reset your password</h6>
                        <div className="single-input">
                          <FormInput type="text" placeholder="Email" value={email} handleChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="checkbox-wrap mt-10">
                          <label className="label-for-checkbox inline mt-15">
                            <input className="input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember me</span>
                          </label>
                        </div>
                        <div className="button-box mt-25">
                          <Button type="submit" className="btn btn--full btn--black">Email Password</Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];
  //<AuthWrapper {...configAuthWrapper}>
  //  <div className="formWrap">

  //    {errors.length > 0 && (
  //      <ul>
  //        {errors.map((e, index) => {
  //          return (
  //            <li key={index}>
  //              {e}
  //            </li>
  //          );
  //        })}
  //      </ul>
  //    )}

  //    <form onSubmit={handleSubmit}>

  //      <FormInput
  //        type="email"
  //        name="email"
  //        value={email}
  //        placeholder="Email"
  //        handleChange={e => setEmail(e.target.value)}
  //      />

  //      <Button type="submit">
  //        Email Password
  //      </Button>

  //    </form>

  //    <div className="links">
  //      <Link to="/login">
  //        LogIn
  //      </Link>
  //      {` | `}
  //      <Link to="/registration">
  //        Register
  //      </Link>
  //    </div>

  //  </div>
  //</AuthWrapper>
}

export default EmailPassword;