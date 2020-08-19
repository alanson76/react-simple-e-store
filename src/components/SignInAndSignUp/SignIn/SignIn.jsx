import React, {Component} from 'react';

import './SignIn.scss';
import FormInput from '../../common/FormInput/FormInput';
import CustomButton from '../../common/CustomButton/CustomButton';
import {signInWithGoogle} from '../../../firebase/firebase.util';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({email: '', password: ''});
  };

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I have already an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
