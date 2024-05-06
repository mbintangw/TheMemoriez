import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'

const cardImages = [
  {"image": "img/vintage.jpg"},
  {"image": "img/crimson.jpg"},
  {"image": "img/daisy.jpg"},
  {"image": "img/lily.jpg"},
  {"image": "img/pink-swamp.jpg"},
  {"image": "img/saffron.jpg"},
]

const PlayGames = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
  
    setCards(shuffleCards)
    setTurns(0)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  const handleRestart = () => {
    shuffleCards();
  }

  console.log(cards,turns)
  return (
      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='card-grid'>
          {cards.map ((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </div>
        <Link to={`/`} className='button-primary text-center mt-10 !w-1/2'>Home</Link>
        <button onClick={handleRestart} className='button-primary !w-1/2'>Restart</button>
      </div>
   
  )
}

export default PlayGames
