import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'
import AccountMenu from '../AccountMenu/AccountMenu'
import { fetchSpots } from '../../store/spots'


const Navbar = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)
    const [picture, setPicture] = useState('https://2023.riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg')
    const [searchActive, setSearchActive] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const session = useSelector((state) => state.session)
    const url = window.location.href

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSpots(searchQuery))
        navigate(`/search/${searchQuery}`)
    }

    const handleAccountMenu = () => {
        if(openMenu === true){
            console.log('what')
            return
        }
        else if(openMenu === false){
            console.log('what2')
            setOpenMenu(true)
        }
    }

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
                    <form
                        onSubmit={(e) => handleSearch(e)}
                        method='POST'
                    >
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search'
                            type='text'
                        />
                        <button>
                            <i type='submit' className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>)}
                <div className='navbar__main__account'>
                    <p>Islebnb your island</p>
                    <i className="fa-solid fa-globe"></i>
                    <div onClick={() => handleAccountMenu()} className='navbar__account__button'>
                        <i className="fa-solid fa-bars"></i>
                        <img alt='pfp' src={picture}/>
                    </div>
                </div>
            </div>
            <AccountMenu className='account__menu__component' authenticated={authenticated} setAuthenticated={setAuthenticated} show={openMenu} onClickOutside={() => setOpenMenu(false)} />
        </div>
    )
}


export default Navbar