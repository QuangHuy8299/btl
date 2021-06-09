import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../froms/FromInput';
import Button from './../froms/Button/index'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const SignIn = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }

  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  const configAuthWrapper = {
    headline: 'LogIn'
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
                        <Link to="/login" className="nav-link active">
                          Login
                        </Link>
                      </li>
                      <li className="tab__item nav-item active">
                        <Link to="/registration" className="nav-link active">
                          Our Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //<AuthWrapper {...configAuthWrapper}>
    //  <div className="formWrap">
    //    <form onSubmit={handleSubmit}>

    //      <FormInput
    //        type="email"
    //        name="email"
    //        value={email}
    //        placeholder="Email"
    //        handleChange={e => setEmail(e.target.value)}
    //      />

    //      <FormInput
    //        type="password"
    //        name="password"
    //        value={password}
    //        placeholder="Password"
    //        handleChange={e => setPassword(e.target.value)}
    //      />

    //      <Button type="submit">
    //        LogIn
    //      </Button>

    //      <div className="socialSignin">
    //        <Button onClick={handleGoogleSignIn}>
    //          Sign in with Google
    //          </Button>
    //      </div>

    //      <div className="links">
    //        <Link to="/registration">
    //          Register
    //        </Link>
    //        {` | `}
    //        <Link to="/recovery">
    //          Reset Password
    //        </Link>
    //      </div>

    //    </form>
    //  </div>
    //</AuthWrapper>
  ];
}

export default SignIn;