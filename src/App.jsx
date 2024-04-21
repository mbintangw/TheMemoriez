import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home/>
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
