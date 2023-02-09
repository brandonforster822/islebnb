import React from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSpots } from '../../store/spots'
const Home = () => {
    const dispatch = useDispatch()
    dispatch(fetchAllSpots(''))
    const spot = useSelector((state) => state.spot)

    return(
        <div className='home__list__container'>
            <div className='home__list__item'>
                <img alt={spot.title} src={spot.img_url}/>
                <div className='list__item__header'>
                    <h5>{spot.title}</h5>
                    <div className='list__item__container'>
                        <i className="fa-solid fa-star"></i>
                        <p>{spot.rating}</p>
                    </div>
                </div>
                <p>516 miles away</p>
                <p>{`$${spot.price} night`}</p>
            </div>
        </div>
    )
}

export default Home