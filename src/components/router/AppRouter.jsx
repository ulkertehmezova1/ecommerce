import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {Cart} from '../Pages/Cart/index'
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import { Shop } from '../Pages/Shop'
import { SingleProduct } from '../Pages/SingleProduct'
import WishList from '../Pages/WishList'


function AppRouter() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/shop" element={< Shop/>}/>
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/wishlist" element={<WishList />} />

        </Routes>
        <Footer />
    </div>
  )
}

export default AppRouter