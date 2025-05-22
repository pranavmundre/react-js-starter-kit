import React from 'react';
import { Navigate } from 'react-router-dom';
import Unauthorized from './../errors/Unauthorized';

const ProtectedRoute = ({ element: Component, roles, userRole }) => {

    if (!userRole || userRole === 'guest') {
        return <Navigate to="/login" replace />;
    }
     if ( roles.includes(userRole)) {
        return <Component />; 
        // return element; 
    }
    else {
        return <Unauthorized/>; 
    }
//   return <Navigate to="/unauthorized" />; // or redirect to unauthorized page
};

export default ProtectedRoute;
