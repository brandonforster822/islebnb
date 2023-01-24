import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='navbar__container'>
            <div className='navbar__main'>
                <div className='navbar__main__logo'>
                    <i class="fa-solid fa-ship"></i>
                    <h1>islebnb</h1>
                </div>
                <div className='navbar__main__search'>

                </div>
                <div className='navbar__main__account'>
                    <p>Islebnb your island</p>
                    <i class="fa-solid fa-globe"></i>
                    <div className='navbar__account__button'>
                        {/* <i class="fa-solid fa-bars"></i>
                        <img src='https://2023.riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg'/> */}
                    </div>
                </div>
            </div>
            <div className='navbar__amenities'>

            </div>
        </div>
    )
}


export default Navbar