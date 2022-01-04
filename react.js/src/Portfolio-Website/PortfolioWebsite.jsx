import React from 'react'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './PortfolioWebsite.css'
function PortfolioWebsite() {
    return (
        <div className='portfolio-website'>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}

export default PortfolioWebsite
