import React from 'react'
import backcard from '/img/back-card.jpg'

export default function Cards({card}) {
  return (
    <div key={card.id} className='card'>
      <div>
        <img src={card.image} alt='front card'/>
        <img src={backcard} alt='back card' />
      </div>
  </div>
  )
}
