import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import PlayGames from './Pages/PlayGames.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home/>
          </MainLayout>
        }/>
        <Route path="/PlayGames" element={
          <MainLayout>
            <PlayGames/>
          </MainLayout>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
