import React from 'react'
import NavLink from '../NavLink'
import './Navbar.css'

const navLinks = ["Home","Projects","About","Contact"]
function Navbar() {
    return (
<div className="navbar">
        <div className="navbar-content">
        <h1 className="name"><a href='/'>Nandit</a></h1>
        <ul>
            {
                navLinks.map((navLink) => (
                    <NavLink value={navLink} />
                ))
            }
        </ul>
    </div>
    </div>
    )
}

export default Navbar
