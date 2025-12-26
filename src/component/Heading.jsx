import React from 'react'

function Heading({heading,subheading}) {
  return (
    <div className='mx-auto text-center md:w-4/12 my-8'>
           
        <h3 className="text-3xl uppercase font-bold l leading-tight py-4">{heading}</h3>
             
         <p className="text-gray-900 mb-2">--- {subheading} ---</p>
       
    </div>
  )
}

export default Heading