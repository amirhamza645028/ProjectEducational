import { useEffect, useState } from 'react'
import Heading from '../Heading'

import CourseCard from './CourseCard'
import Loader from '../Loder'
function CourseCards() {
    const[courseCard,setCourseCard] = useState([])
    const[loading,setloading]=useState(true)
    useEffect(()=>{

    fetch('../../../public/data/CourseCard.json')
    .then(res => res.json())
    .then(data=>{
        setCourseCard(data)
        setloading(false)
    })
    .catch(err =>{
       console.log(err)
       setloading(false) 
    })
},[])
     if(loading){
    return<Loader/>
  }
  return (
    <div className='m-6'>
        <Heading heading={"আপনার কাঙ্খিত ব্যাচটি খুঁজে নিন"} subheading={"নিচের ক্যাটাগরিতে প্রবেশ করুন"}></Heading>
           <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            courseCard.map(CC =>(
                <CourseCard key={CC.id} sednCC={CC}></CourseCard>
            ))
        }
       
    </div> 
    </div>
    
  )
}

export default CourseCards