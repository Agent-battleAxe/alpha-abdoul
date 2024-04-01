import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Team, Work, NotFound } from './pages'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/equipe' element={<Team />} />
      <Route path='/realisation' element={<Work />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
