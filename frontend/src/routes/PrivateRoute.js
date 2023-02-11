import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {isAuthenticated} from '../utils/user-helper.js'

function PrivateOutlet() {
  const auth = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateOutlet;
