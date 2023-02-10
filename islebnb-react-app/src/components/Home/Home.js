import React, { useState, useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSpots } from '../../store/spots'
const Home = () => {
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spot)
    const amenity = useSelector((state) => state.amenity)
    
    useEffect(() => {
        dispatch(fetchAllSpots(''))
    }, [dispatch])

    const amenityChecker = (array) => {
        for (let i = 0; i < array.length; i++){
            if(Object.values(array[i]).indexOf(amenity) > -1){
                return true
            }
        }
        return false
    }
    
    const spotsArray = spots.spots
    const spotsFilter = spotsArray?.filter((spot) => amenityChecker(spot.amenities))

    return(
        <div>
            {spotsFilter !== undefined && (
            <div className='home__list__container'>
                {spotsFilter?.map((spot) => (
                    <div className='home__list__item'>
                        <img alt={spot.title} src={spot.pictures[0]}/>
                        <div className='list__item__header'>
                            <h5>{spot.title}</h5>
                            <div className='list__item__container'>
                                <i className="fa-solid fa-star"></i>
                                <p>{spot.rating}</p>
                            </div>
                        </div>
                        <p>{spot.address}</p>
                        <p>{`$${spot.price} night`}</p>
                    </div>
                ))}
            </div>)}
            {spotsFilter === undefined && (
            <div className='home__loading__container'>
                <h2>Loading...</h2>
            </div>)}
        </div>
    )
}

export default Home