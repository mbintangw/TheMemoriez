import React from 'react'
import Header from '../components/Header'

const MainLayout = (props) => {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 py-5 space-y-5 ">
        {props.children}
      </main>
    </div>
  )
}

export default MainLayout
