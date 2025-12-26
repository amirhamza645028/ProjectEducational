import React from 'react'
import Navber2 from '../Navber/Navber2'
import Footer from '../Home/Footer'
import { Outlet } from 'react-router-dom'
import Navber1 from '../Navber/Navber1'

function Mainlayout() {
  return (
    <div>
        <Navber1></Navber1>
        <Navber2></Navber2>
        
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Mainlayout