import React, { useState, useEffect } from 'react'
import './SearchPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSpots } from '../../store/spots'
import { useParams } from 'react-router'



const SearchPage = () => {
    const dispatch = useDispatch()
    const { searchquery } = useParams()
    const [amenity, setAmenity] = useState(1)
    const spots = useSelector((state) => state.spot)

    useEffect(() => {
        if(spots.spots === undefined){
            dispatch(fetchSpots(searchquery))
        }
    }, [dispatch, spots, searchquery])

    const spotsArray = spots.spots
    return(
        <div className='search__page__container'>
            <div className='search__results__container'>
            <div>
                {spotsArray !== undefined && (
                <div className='search__list__container'>
                    {spotsArray?.map((spot) => (
                        <div className='search__list__item'>
                            <img alt={spot.title} src={spot.pictures[0]}/>
                            <div className='search__item__header'>
                                <h5>{spot.title}</h5>
                                <div className='search__item__container'>
                                    <i className="fa-solid fa-star"></i>
                                    <p>{spot.rating}</p>
                                </div>
                            </div>
                            <p>{spot.address}</p>
                            <p>{`$${spot.price} night`}</p>
                        </div>
                    ))}
                </div>)}
                {spotsArray === undefined && (
                <div className='search__loading__container'>
                    <h2>Loading...</h2>
                </div>)}
            </div>
            </div>
            <div className='search__map__container'>
            </div>
        </div>
    )
}


export default SearchPage