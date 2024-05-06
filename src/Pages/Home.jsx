import React from 'react'
import logo from '/img/logos3.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='flex flex-col'>
      <div className='flex flex-col items-center justify-center flex-1 gap-3'>
        <img src={logo} alt="logo" className='w-52 md:w-64 pb-5 md:pb-9 '/>
          <Link
            to={`/PlayGames`}
            className='button-primary text-center'
          >
            PLAY GAME
          </Link>
          <button
            className='button-primary'
          >
            SETTINGS
          </button>
      </div>
    </main>
  )
}

export default Home
