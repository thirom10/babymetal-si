import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Canciones from './pages/Canciones'
import Miembros from './pages/Miembros'
import Contacto from './pages/Contacto'
import BabymetalAlbums from './pages/Albums'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Albums' element={<BabymetalAlbums/>} />
          <Route path='/Canciones' element={<Canciones/>} />
          <Route path='/Miembros' element={<Miembros/>} />
          <Route path='/Contacto' element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
