import React from 'react';
import { Navigate } from 'react-router-dom';
import Unauthorized from './../errors/Unauthorized';

const ProtectedRoute = ({ element: Component, roles, userRole }) => {

    if (!userRole || userRole === 'guest') {
        return <Navigate to="/login" replace />;
    }
    else if ( roles.includes(userRole)) {
        return <Component />; 
    }
    else {
        // return <Navigate to="/login" />; // or redirect to unauthorized page
        return <Unauthorized/>; 
    }
//   return <Navigate to="/unauthorized" />; // or redirect to unauthorized page
};

export default ProtectedRoute;
