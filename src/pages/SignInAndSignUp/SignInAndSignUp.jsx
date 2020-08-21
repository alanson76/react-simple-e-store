import React from 'react';

import './SignInAndSignUp.scss';
import SignIn from '../../components/SignInAndSignUp/SignIn/SignIn';
import SignUp from '../../components/SignInAndSignUp/SignUp/SignUp';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
