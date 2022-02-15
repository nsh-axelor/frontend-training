import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import ProductDetail from './Components/ProductDetail'
import Products from './Components/Products'

function FakeShop() {
  return (
    <div className='app'>
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='/*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
    </div>
  )
}

export default FakeShop