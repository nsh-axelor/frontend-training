import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
<div className="navbar">
        <div className="navbar-content">
        <h1 className="name"><a href='/'>Nandit</a></h1>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </div>
    </div>
    )
}

export default Navbar
