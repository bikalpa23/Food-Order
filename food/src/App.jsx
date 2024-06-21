import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App