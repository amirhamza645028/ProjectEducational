import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

import Banner from './Banner'
import Courses from '../course/Courses'
import PromoCards from '../course/PromoCards'
import CourseCards from '../course/CourseCards'
import Question from '../Question/Question'
import Contact from './Contact'

import Marque from '../Navber/Marque'

function Home() {
  return (
    <div>
      
        <Marque></Marque>
        <Banner></Banner>
        <Courses></Courses>
        <PromoCards></PromoCards>
        <CourseCards></CourseCards>
        <Question></Question>
        <Contact></Contact>

       
    </div>
  )
}

export default Home