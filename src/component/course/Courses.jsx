import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Loader from '../Loder'
import Course from './Course'

function Courses() {
  const [courses, setCourse] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(()=>{
    fetch('/data/courseHp.json')
    .then(res => res.json())
    .then(data =>{
      setCourse(data);
      setloading(false)

    })

    .catch(err => {
      console.log(err)
      setloading(true)
    });
  },[])
  if(loading){
    return<Loader/>
  }
  return (
    <div>
        <Heading heading={"আপনার কাঙ্খিত ব্যাচটি খুঁজে নিন"} subheading={"নিচের ক্যাটাগরিতে প্রবেশ করে আপনার পছন্দ মত ব্যাচে এনরোল করুন"}></Heading>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6'>
          {courses.map(courses =>(
            <Course  key={courses.id} course={courses}></Course>
          ))}
        </div>

    </div>
  )
}

export default Courses