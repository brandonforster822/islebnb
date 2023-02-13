import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer__container'>
            <div className='footer__copyright'>
                <i class="fa-solid fa-umbrella-beach"></i>
                <p>2023 Islebnb, Inc.</p>
            </div>
            <div className='footer__resources'>
                <p>Resources</p>
            </div>
        </div>
    )
}

export default Footer