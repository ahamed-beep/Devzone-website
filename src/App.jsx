import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Section from './Components/Section'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Section/>} />
        
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App