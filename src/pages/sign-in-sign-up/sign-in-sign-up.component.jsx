import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import Signin from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <div className = "sign-in-and-sign-up">
        <Signin />
        <Signup />
    </div>
);

export default SignInAndSignUp;