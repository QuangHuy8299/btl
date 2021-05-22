import React, { useState } from 'react';
import Button from './../froms/Button';
import './styles.scss';
import { signInWithGoogle, auth } from './../../firebase/utils';
import FormInput from './../froms/FromInput';
import AuthWrapper from './../AuthWrapper';
import { Link, withRouter } from 'react-router-dom'

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const resetForm = () => {
    setEmail('');
    setPassword('');
  }
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password)
      resetForm();
      props.history.push('/');
    } catch (err) {

    }
  }

  const configAuthWrapper = {
    headline: 'Login'
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="fromWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <div className="socialSignIn">
            <div className="row">
              <Button onClick={signInWithGoogle}>
                Sign in with Google
                  </Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">
              Reset Password
              </Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignIn);