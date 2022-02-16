import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Loader from './Components/Loader'
import Header from './Components/Header'
import "./FakeShop.css"
const ProductDetail = lazy(() => import("./Components/ProductDetail"))
const Products = lazy(() => import("./Components/Products"))


function FakeShop() {
  return (
    <div className='app'>
      <Header />
    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='/*' element={<h1>404 Not Found</h1>} />
      </Routes>
      </Suspense>
    </Router>
    
    </div>
  )
}

export default FakeShop