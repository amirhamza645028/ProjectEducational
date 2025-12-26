import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

import Banner from './Banner'
import Courses from '../course/Courses'
import PromoCards from '../course/PromoCards'
import CourseCards from '../course/CourseCards'
import Question from '../Question/Question'
import Contact from './Contact'
import CourseAllBatchFinder from '../course/CourseDetails/CourseAllBatchFinder'

function Home() {
  return (
    <div>
      
        <Banner></Banner>
        <Courses></Courses>
        <PromoCards></PromoCards>
        <CourseCards></CourseCards>
        <Question></Question>
        <Contact></Contact>
        <CourseAllBatchFinder></CourseAllBatchFinder>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Home