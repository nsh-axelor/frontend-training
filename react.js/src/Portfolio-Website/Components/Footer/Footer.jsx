import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='contact-handles'>
                <a href="https://www.linkedin.com/in/nandit-shah/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://nanditshah105.medium.com/" target="_blank"><i className="fab fa-medium-m"></i></a>
                <a href="https://github.com/nsh-axelor/" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
            <p className='last-note'>Made With ❤️ By Nandit</p>
        </div>

    )
}

export default Footer
