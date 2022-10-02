import React from 'react';
import { Outlet, Navigate  } from 'react-router-dom';
const useAuth = () => {
    const user = localStorage.getItem("Email");
    const pass=localStorage.getItem("Password");
  
    if (user && pass) {
      return true;
    } else {
      return false;
    }
  };
const ProtectedRoutes = () => {
    
      const isAuth=useAuth();
  return isAuth? <Outlet /> : <Navigate to="/signup" />
}

export default ProtectedRoutes