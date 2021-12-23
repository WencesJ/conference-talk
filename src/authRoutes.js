import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const AuthCheckRoute = ({ cookies }) => {
    return (cookies.user != undefined && cookies.me != undefined) ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthCheckRoute;
