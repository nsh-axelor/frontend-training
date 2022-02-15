import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import axios from 'axios'
import { setProducts } from '../Redux/Actions/ProductActions';

function Products() {
    const products = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()
    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err) => console.log("Err",err))
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div className='ui grid container'>
        <Product />
    </div>
  )
}

export default Products