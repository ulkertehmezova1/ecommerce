import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './style.css';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { logInSchema } from '../../validations/loginForm';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';



const Login = () => {
  const [flag, setFlag]=useState(false);
  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(logInSchema),
  });

  
  const navigate=useNavigate();

  const eml=localStorage.getItem("Email");
  const pwd=localStorage.getItem("Password");
  const onLogSubmit = data => {
    if(data.email===eml && data.password===pwd){
      localStorage.setItem("logEmail", data.email);
      localStorage.setItem("logPass",data.password);
      console.log(data);
      setFlag(false);
      navigate("/")
    }
    else{
     setFlag(true);
    }
  };


  return (
    <>
     {flag && <Alert severity="error">Account not found</Alert>}
    <div className='d-flex-login'>
      <div className='img-log'>
      <img className='img-login' src={require('../../assets/images/customers/welcome.jpg')} />
      </div>
         
            <div className='login'>
      <form onSubmit={handleSubmit(onLogSubmit)}>
      <h1>Hello! Please, log in to continue</h1>

                    <div >
                    {
                      errors?.email && <p>{errors?.email.message}</p>
                     }
                    <input type={'text'}    
                    placeholder='Email' 
                    {...register("email")}
                     />
                     
                    </div>
                    <div>
               {errors?.password && <p>{errors?.password.message}</p>}

                    <input 
                    type="text"
                     placeholder='Password' 
                     {...register("password")}
                    />
                    </div>
                        <button type='submit' className='btn-form'>Login</button>
   <Link to="/">Go to the Home Page</Link> 
                    
                </form>

                </div>
    </div>
  </>
  )
}

export default Login