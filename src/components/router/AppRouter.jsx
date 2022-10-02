import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Cart } from '../Pages/Cart/index'
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Blog from '../Pages/Blog/Blog'
import BlogSingle from '../Pages/Blog/BlogSingle'
import { Shop } from '../Pages/Shop'
import { SingleProduct } from '../Pages/SingleProduct'
import WishList from '../Pages/WishList'
import SignUp from '../Pages/Signup'
import { HeaderLayout } from './HeaderLayout'
import ProtectedRoutes from './ProtectedRoutes.'
import Login from '../Login'
import ProtectedLoginRoutes from './ProtectedLoginRoute'


function AppRouter() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
     {/* <Header /> */}
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/shop" element={< Shop />} />
        <Route path="/blog/*" element={<BlogSingle />} />
        <Route path='/contact' element={<Contact />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<ProtectedLoginRoutes />}>
      <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/wishlist" element={<WishList />} />
        </Route>
        </Route>
        </Route>
       
      </Routes>
    </div>
  )
}

export default AppRouter