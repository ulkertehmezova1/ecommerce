import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../Header/header.css'
import {useSelector} from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Header() { 
  const navigate=useNavigate();
 const [sticky,setSticky] =useState('');
 const card=useSelector((state)=>state.card);

 useEffect(() => {
   window.addEventListener('scroll', isSticky);
 
   return () => {
     window.removeEventListener('scroll',isSticky);
   };
 }, []);

 const isSticky =()=>{
  const scrollTop = window.scrollY;
  const stickyClass = scrollTop >=250 ? 'is-sticky' : '';
  setSticky(stickyClass);

 };
 const classes = `header-bottom  ${sticky}`;

 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
 
    
  };
  const handlelogOut=()=>{
    localStorage.removeItem("logEmail");
    localStorage.removeItem("logPass");
    navigate("/");
  }

  return (
    <div className='header'>
      
     <div className="header-top">
     <div className="container">
      <div className="phone">
        <span><i className="fa-solid fa-phone"></i>+1235 2355 98</span>
      </div>
      <div className="mail">
        <span><i className="fa-sharp fa-solid fa-paper-plane"></i>Youremail@email.com</span>
      </div>
      <div className="delivery">
        <span>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
      </div>
     </div>
    </div>

    <div className={classes}>
    <nav className="navbar navbar-expand-md bg-light py-0">
        <div className="container">
          <Link className="navbar-brand" to="/">VegeFoods</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-icon"><i className="fa-solid fa-bars"></i></span>
            Menu
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname='active' aria-current="page" end to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle"activeclassname='active' to='/shop' role="button" data-bs-toggle="collapse" aria-expanded="false">
                  Shop
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink  activeclassname='active'className="dropdown-item" to="/shop">Shop</NavLink></li>
                  <li><NavLink activeclassname='active' className="dropdown-item" to="/singleproduct">Single Product</NavLink></li>
                  <li><NavLink activeclassname='active' className="dropdown-item" to="/cart">Cart</NavLink></li>
                  <li><NavLink activeclassname='active' className="dropdown-item" to="/wishlist">Wishlist</NavLink></li>

                </ul>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" aria-current="page" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" aria-current="page" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="d-flex icon-cart">
              <NavLink to='/cart'><button className="btn" activeclassname='active' type="submit"><i className="fa-solid fa-cart-arrow-down"></i><span>[{card?.length}]</span></button></NavLink>
            </div>
            <div className="d-flex">
              <button 
            style={{all:"unset", margin:"5px", display:'flex'}}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
        <PersonIcon />
        <p>{localStorage.getItem("logEmail")}</p>
        </button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      { localStorage.getItem("logEmail")? <MenuItem onClick={handleClose}><p onClick={handlelogOut}>Logout</p></MenuItem> : <MenuItem onClick={handleClose}><p onClick={()=>navigate("/login")}>LogIn</p></MenuItem>}
        <MenuItem><p onClick={()=>navigate('/signup')}>SignUp</p></MenuItem>
      </Menu>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Header