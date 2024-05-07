import React, { useState } from 'react'
import backcard from '/img/back-card.jpg'
import ReactCardFlip from 'react-card-flip'

export default function Cards({card, handleChoice, flipped, selectedCard}) {
  
  const handleClick = () => {
    handleChoice(card)
  }
  
  return (
    <div key={card.id} className='card'>
      <ReactCardFlip isFlipped={selectedCard !== card.id && !card.matched}>

      <img src={card.image} alt='front card' className=''/>
      <div>
        <img 
          src={backcard} 
          alt='back card' 
          onClick= {() => handleClick(card.id)}
          />
      </div>

    </ReactCardFlip>
    </div>
    
  )
}
{/* <div key={card.id} className='card'>
<div className={flipped ? 'flipped' : ''}>
  <img src={card.image} alt='front card' className='absolute'/>
  <img 
    src={backcard} 
    alt='back card' 
    onClick={handleClick}
    />
</div>
</div> */}