import React from 'react'
import LoaderGif from "./Loader.gif"
import "../FakeShop.css"

function Loader() {
  return (
    <div className='loader'>
        <img src={LoaderGif} alt="Loading..."/>
    </div>
  )
}

export default Loader