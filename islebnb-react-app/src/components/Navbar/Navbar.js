import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openLogin } from "../../store/modal"
import './Navbar.css'


const Navbar = () => {
    const dispatch = useDispatch()
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenLogin = () =>{
        dispatch(openLogin())
        setOpenMenu(!openMenu)
    }

    return (
        <div className='navbar__container'>
            <div className='navbar__main'>
                <div className='navbar__main__logo'>
                    <i class="fa-solid fa-ship"></i>
                    <h1>islebnb</h1>
                </div>
                <div className='navbar__main__search'>
                    <div className='search__button__left'>
                        <p>Anywhere</p>
                    </div>
                    <div className='search__button__center'>
                        <p>Any week</p>
                    </div>
                    <div className='search__button__right'>
                        <p>Add guests</p>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className='navbar__main__account'>
                    <p>Islebnb your island</p>
                    <i class="fa-solid fa-globe"></i>
                    <div onClick={() => setOpenMenu(!openMenu)} className='navbar__account__button'>
                        <i class="fa-solid fa-bars"></i>
                        <img src='https://2023.riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg'/>
                    </div>
                </div>
            </div>
            <div className='navbar__amenities'>
                <div id='amenity__active' className='amenity__selector'>
                    <i class="fa-solid fa-house"></i>
                    <p>Developed</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-campground"></i>
                    <p>Non-developed</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-lock"></i>
                    <p>Private island</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-puzzle-piece"></i>
                    <p>Island parcel</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-car-side"></i>
                    <p>Peninsula</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-anchor"></i>
                    <p>Ocean island</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-bridge-water"></i>
                    <p>River island</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-sailboat"></i>
                    <p>Lake island</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-plane-arrival"></i>
                    <p>Airstrip</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-solar-panel"></i>
                    <p>Off-the-grid</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-water-ladder"></i>
                    <p>Pool</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-fire"></i>
                    <p>Indoor fireplace</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-wifi"></i>
                    <p>Wifi</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-temperature-arrow-down"></i>
                    <p>Air conditioning</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-earth-americas"></i>
                    <p>American</p>
                </div>
                <div className='amenity__selector'>
                    <i class="fa-solid fa-earth-europe"></i>
                    <p>Foreign</p>
                </div>
                <div className='filters__button'>
                    <i class="fa-solid fa-sliders"></i>
                    <p>Filters</p>
                </div>
            </div>
            {openMenu &&(
                <div className='account__menu'>
                    <div className='account__menu__1'>
                        <p onClick={() => handleOpenLogin()} id='login__button'>Log in</p>
                        <p>Sign up</p>
                    </div>
                    <div className='account__menu__2'>
                        <p>Islebnb your home</p>
                        <p>Help</p>
                    </div>
                </div>
                )}
        </div>
    )
}


export default Navbar