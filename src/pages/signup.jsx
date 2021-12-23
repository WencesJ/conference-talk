import React from 'react';
import Layout from '../constant/layout/layout';
import LayoutBack from '../constant/layout/layoutBack';
import SignupPage from '../containers/loginSignup/signupPage';

const SignUp = () => {
    return (
        <LayoutBack>
            <SignupPage/>
        </LayoutBack>
    );
};

export default SignUp;