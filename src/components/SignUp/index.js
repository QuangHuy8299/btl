import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { signUpUserStart } from './../../redux/User/user.actions';
import './styles.scss';
import FormInput from './../froms/FromInput';
import Button from './../froms/Button/index'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr
});

const Signup = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push('/');
    }

  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }

  }, [userErr]);

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(signUpUserStart({
      displayName,
      email,
      password,
      confirmPassword
    }));
  }
  
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
                      <form action="#" className="account-form-box" onSubmit={handleFormSubmit}>
                        <h6>Register An Account</h6>
                        {errors.length > 0 && (
                          <ul>
                            {errors.map((err, index) => {
                              return (
                                <li key={index} style={{color:'red'}}>
                                  {err}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                        <div className="single-input">
                          <FormInput type="text" placeholder="Full Name" value={displayName} handleChange={e => setDisplayName(e.target.value)} />
                        </div>
                        <div className="single-input">
                          <FormInput type="text" placeholder="Email" value={displayName} handleChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="single-input">
                          <FormInput type="password" placeholder="Password" value={password} handleChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="single-input">
                          <FormInput
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            handleChange={e => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <p className="mt-15">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link className="privacy-policy-link" target="_blank">privacy policy</Link>.</p>
                        <div className="button-box mt-25">
                          <Button type="submit" className="btn btn--full btn--black">Register</Button>
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
}

export default Signup;