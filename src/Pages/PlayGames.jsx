import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Winner from '../components/Winner'

const cardImages = [
  {"image": "img/vintage.jpg", matched : false},
  {"image": "img/crimson.jpg", matched : false},
  {"image": "img/daisy.jpg", matched : false},
  {"image": "img/lily.jpg", matched : false},
  {"image": "img/pink-swamp.jpg", matched : false},
  {"image": "img/saffron.jpg", matched : false},
]

const PlayGames = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [pickFirst, setpickFirst] = useState(null)
  const [pickSecond, setpickSecond] = useState(null)
  const [selectedCard, setselectedCard] = useState (null)
  const [showWin, setshowWin] = useState(false)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
    
    setpickFirst(null)
    setpickSecond(null)
    setCards(shuffleCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    pickFirst ? setpickSecond(card) : setpickFirst(card)
    setselectedCard(card.id)
  }

  useEffect(() => {
    if (pickFirst && pickSecond) {
      if (pickFirst.image === pickSecond.image) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.image === pickFirst.image) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        console.log('You found a match')
        resetTurn()
      } else {
        console.log('Sorry, try again')
        setTimeout(() => {
          setselectedCard(null);
          resetTurn();
        }, 500)
      }
    }
  }, [pickFirst, pickSecond])

  const resetTurn = () => {
    setpickFirst(null)
    setpickSecond(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setshowWin(true)
    }
  }, [cards])

  useEffect(() => {
    shuffleCards()
    setshowWin(false)
  }, [])

  const handleRestart = () => {
    shuffleCards()
    setshowWin(false)
  }

  return (
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1>Turns : {turns}</h1>
        <div className='card-grid'>
          {cards.map ((card) => (
            <Cards 
              key={card.id} 
              card={card} 
              handleChoice={handleChoice}
              selectedCard={selectedCard}
              />
          ))}
        </div>
        <Link to={`/`} className='button-primary text-center mt-10 !w-1/2'>Home</Link>
        <button onClick={handleRestart} className='button-primary !w-1/2'>Restart</button>
        <Winner showWin={showWin} turns={turns} handleRestart={handleRestart}/>
      </div>
   
  )
}

export default PlayGames
