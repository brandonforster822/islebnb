import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'
import AccountMenu from '../AccountMenu/AccountMenu'


const Navbar = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)
    const [picture, setPicture] = useState('https://2023.riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg')
    const [searchActive, setSearchActive] = useState(true)
    const session = useSelector((state) => state.session)
    const url = window.location.href


    useEffect(() => {
        if (url.includes('account')){
            setSearchActive(false)
        } else {
            setSearchActive(true)
        }
    }, [url])


    useEffect(() => {
        async function fetchImg(user) {
            const image = await fetch(`/api/users/picture/${user.id}`)
            const img_url = await image.json()
            if (img_url){
                setPicture(img_url.img_url)
            }
        }
        if (authenticated) {
            fetchImg(session)
        }
    }, [authenticated, session])

    return (
        <div className='navbar__container'>
            <div className='navbar__main'>
                <div onClick={() => navigate('/')} className='navbar__main__logo'>
                    <i className="fa-solid fa-ship"></i>
                    <h1>islebnb</h1>
                </div>
                {searchActive && (<div className='navbar__main__search'>
                        <input/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                </div>)}
                <div className='navbar__main__account'>
                    <p>Islebnb your island</p>
                    <i className="fa-solid fa-globe"></i>
                    <div onClickOutside={() => setOpenMenu(!openMenu)} onClick={() => setOpenMenu(!openMenu)} className='navbar__account__button'>
                        <i className="fa-solid fa-bars"></i>
                        <img alt='pfp' src={picture}/>
                    </div>
                </div>
            </div>
            <AccountMenu authenticated={authenticated} setAuthenticated={setAuthenticated} show={openMenu} onClickOutside={() => setOpenMenu(!openMenu)} />
        </div>
    )
}


export default Navbar