import React, { Component } from 'react';
import Button from './../froms/Button';
import './styles.scss';
import { signInWithGoogle, auth } from './../../firebase/utils';
import FormInput from './../froms/FromInput';

const initialState = {
  email: '',
  password: ''
}
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        ...initialState
      })
    }catch(err){
      
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <div className="wrap">
          <h2>
            LogIn
          </h2>
          <div className="fromWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                handleChange={this.handleChange}
              />
              <Button type="submit">Login</Button>
              <div className="socialSignIn">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;