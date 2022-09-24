import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Pages/Home/Home'


function AppRouter() {
  return (
    <div>
        <Router>
            <Header/>
         <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* {/* <Route path='/' element={<Home/>}></Route> */}
          {/* <Route path='/' element={<About/>}></Route>
          <Route path='/' element={}></Route>  */}
         </Routes>
         <Footer/>
        </Router>
    </div>
  )
}

export default AppRouter