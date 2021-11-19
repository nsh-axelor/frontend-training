import React from 'react'
import Body from './Components/BodyComponent/Body'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
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
