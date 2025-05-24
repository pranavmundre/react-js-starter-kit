// import React from 'react';
import Home from './../pages/Home';
import Login from './../pages/Login';
import AboutUs from './../pages/AboutUs';
import ContactUs from './../pages/ContactUs';
import UserDashboard from './../pages/User/UserDashboard';

export const publicRoutes = [
  { Path: '/', Component: Home , Name: 'home'},
  { Path: '/login', Component: Login, Name: 'login'},
  { Path: '/about-us',  Component: AboutUs, Name: 'about-us'},
  { Path: '/contact-us',  Component: ContactUs, Name: 'contact-us'},
];

export const protectedRoutes = [
  { 
    Path: '/user/dashboard',
    roles: ['user', 'admin'], Component: UserDashboard,
    Name: 'user_dashboard'
  },
  // {
  //   path: '/admin-panel',
  //   component: 'AdminPanel', roles: ['superadmin'],
  // },
  
];


// const BASE_URL = process.env.REACT_APP_BASE_URL || window.location.origin;

export function GetRoutePath(path_name){
  const allRoutes = [...publicRoutes, ...protectedRoutes];
  const route = allRoutes.find(route => route.Name === path_name);
  
  if (!route) {
    throw new Error(`Route name "${path_name}" not found`);
  }
  return route.Path;
  // return `${window.location.origin}${route.path}`;

}