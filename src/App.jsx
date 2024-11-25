import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Canciones from './pages/Canciones'
import Miembros from './pages/Miembros'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Canciones' element={<Canciones/>} />
          <Route path='/Miembros' element={<Miembros/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
