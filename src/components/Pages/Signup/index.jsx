import React, { useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {SignupSchema} from "../../../validations/signupForm";

const SignUp = () => {
  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema),
  });
const navigate=useNavigate();

const onSubmit = data => {
  localStorage.setItem("Email", data.email);
  localStorage.setItem("Password", data.password);
  console.log(data);
};
  return (
  <>
  <div className='d-flex-sign'>
  <div className='img-sign'>
    <img className='img-signup' src={require('../../../assets/images/customers/welcome.jpg')} />
  </div>
    <div className='signup'>
    
  <form onSubmit={handleSubmit(onSubmit)}>
  <h1>Welcome! Please register to continue</h1>
   
  <div>
<label for="name">Name</label>
<input id="name" 
type='text'
{...register("name")}
/>
{errors?.name && <p>{errors?.name.message}</p>}
</div>

<div>
<label for="surname">Surname</label>
<input id="surname" 
type='text'
{...register("surname")}
/>
{errors?.surname && <p>{errors?.surname.message}</p>}
</div>

<div>
<label for="email">Email</label>
<input id="email" type='text'
{...register("email")}

/>
{errors?.email && <p>{errors?.email.message}</p>}
</div>

<div>
<label for="password">Password</label>
<input id="password" 
type='password'
{...register("password")}
/>
{errors?.password && <p>{errors?.password.message}</p>}
</div>


<button type='submit'>Register</button>
<div style={{textAlign:"center"}}>
  Already registered? 
  <Link to='/login'>Signin</Link>
</div>

<Link to="/" style={{marginTop:"10px"}}>Go to the Home Page</Link> 

</form>
         </div>
       </div>
         </>
        
  )
}

export default SignUp