import React from 'react'
import { Outlet, Navigate  } from 'react-router-dom';


const useAuth = () => {
    const user = localStorage.getItem("logEmail");
    const pass=localStorage.getItem("logPass")
  
    if (user && pass) {
      return true;
    } else {
      return false;
    }
  };
const ProtectedLoginRoutes = () => {
    
      const isAuth=useAuth();
  return isAuth? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedLoginRoutes