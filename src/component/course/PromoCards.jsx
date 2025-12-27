import React from 'react'

import promocard from '../../../public/data/Promo4card.json'
import PromoCard from './PromoCard'

function PromoCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 '>
       {promocard.map(Pc=>(
        <PromoCard key={Pc.id} sendPc={Pc}></PromoCard>
       ))}
    </div>
  )
}

export default PromoCards