import React from 'react'
import Marquee from "react-fast-marquee";

function Marque() {
  return (
    <div>
        <div className='bg-gradient-to-r bg-[#f1f5f5b3] py-2 border-y border-gray-200'>
        <Marquee speed={50} gradient={false} className="font-bold">
          <span className="text-red-600 mx-4">📢 I can be a React component, multiple React components, or just some text.</span>
          <span className="text-blue-600 mx-4">🎯 Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span className="text-green-600 mx-4">🌟 Accusamus, nesciunt! Doloribus nemo asperiores ut est fugiat, exercitationem adipisci doloremque?</span>
        </Marquee>
      </div>
    </div>
  )
}

export default Marque