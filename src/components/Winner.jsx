import React from 'react'

const Winner = ({win, turns, handleRestart}) => {
  return (
    win && (
      <div className='fixed top-0 w-full h-full flex justify-center items-center bg-third bg-opacity-50  backdrop-blur-sm'>
        <div className='p-2 bg-third rounded-xl w-96 h-96 gap-2'>
          <div className='text-center w-full h-full flex flex-col justify-center items-center gap-10'>
            <p className='text-3xl'>Congratulations! You Win!</p>
            <p>Total Turn : {turns}</p>
            <button className='button-primary !w-1/2' onClick={handleRestart}>Play Again</button>
          </div>
        </div>
      </div>
      
    )
  )
}

export default Winner
