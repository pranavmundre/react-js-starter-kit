// import React from 'react';
import Home from './../pages/Home';
import Login from './../pages/Login';
import AboutUs from './../pages/AboutUs';
import UserDashboard from './../pages/User/UserDashboard';

export const publicRoutes = [
  { path: '/', component: 'Home' },
  { path: '/login', component: 'Login' },
  { path: '/about-us',  component: 'AboutUs',
  },
];

export const protectedRoutes = [
  { 
    path: '/user/dashboard',
    roles: ['user', 'admin'], component: 'UserDashboard',
  },
  {
    path: '/admin-panel',
    component: 'AdminPanel', roles: ['superadmin'],
  },
  
];

export const componentMap = {
  Home,
  Login,
  AboutUs,
  UserDashboard
};
