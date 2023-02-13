import React, { useState, useEffect } from 'react'
import './SearchPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSpots } from '../../store/spots'
import { useParams } from 'react-router'
import SearchMap from '../SearchMap/SearchMap'


const SearchPage = ( { loaded }) => {
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
                <div className='search__container'>
                    <div className='island__number__container'>
                        <p>{spotsArray.length} islands</p>
                    </div>
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
                    </div>
                </div>)}
                {spotsArray === undefined && (
                <div className='search__loading__container'>
                    <h2>Loading...</h2>
                </div>)}
            </div>
            </div>
            {loaded && (<div className='search__map__container'>
                <SearchMap locations={[
              {
                name: "App Academy",
                location: { lat: 37.799278, lng: -122.401138 },
              },
              {
                name: "Jedi Temple",
                location: { lat: 37.550409, lng: -122.059313 },
              },]}
              />
            </div>)}
        </div>
    )
}


export default SearchPage