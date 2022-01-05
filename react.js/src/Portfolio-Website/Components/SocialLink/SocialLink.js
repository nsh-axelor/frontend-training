import React from 'react'
import './SocialLink.css'
const SocialLink = ({link,classes}) => {
    return(
        <a href={link} target="_blank" rel="noreferrer"><i className={classes}></i></a>

    )
}

export default SocialLink;