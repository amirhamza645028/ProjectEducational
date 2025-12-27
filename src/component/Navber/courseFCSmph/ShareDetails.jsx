import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ShareDetails({heading,Question1 , Question2 }) {
  return (
    <div className='mx-auto text-center md:w-8/12 my-8'>
           
        <h3 className="text-3xl uppercase font-bold l leading-tight py-4">{heading}</h3>
             
         <div className="mt-6 space-y-4">
                   <div
                    
                     className="collapse  border border-base-300 bg-base-100 rounded-lg"
                   >
                     <div className="collapse-title font-semibold flex justify-between items-center">
                      
                       <Link to={'/batches'}><span className="flex items-center  text-primary">
                       { Question1 } <span className='ml-96 pl-20 pr-0 mr-0 link-success '> বিস্তারিত </span><FaArrowRight className='link-error pl-2' />
                       </span></Link>
                       
                     </div>
         
                    
                   </div>

               </div>
                        <div className="mt-6 space-y-4">
                   <div
                    
                     className="collapse  border border-base-300 bg-base-100 rounded-lg"
                   >
                     <div className="collapse-title font-semibold flex justify-between items-center">
                      
                       <span className="flex items-center  text-primary">
                       { Question2 } <span className='ml-96 pl-20 pr-0 mr-0 link-success '> বিস্তারিত </span><FaArrowRight className='link-error pl-2' />
                       </span>
                       
                     </div>
         
                    
                   </div>

               </div>
       
    </div>
  )
}

export default ShareDetails