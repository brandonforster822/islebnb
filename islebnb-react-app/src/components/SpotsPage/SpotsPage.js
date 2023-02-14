import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchOneSpot } from '../../store/spots'

import './SpotsPage.css'



const SpotsPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const spot = useSelector((state) => state.spot)

    useEffect(() => {
        if(spot.id === undefined){
            dispatch(fetchOneSpot(id))
        }
    })

    return(
        <div className='spot__page__container'>
            {spot.id !== undefined && (
            <div>
                <div className='spot__header__container'>
                    <div className='spot__page__header'>
                        <h2>{spot.title}</h2>
                    </div>
                    <div className='spot__page__subheader'>
                        <i class="fa-solid fa-star"></i>
                        <h3>{spot.rating} • </h3>
                        <h3>{spot.reviews_count} reviews • </h3>
                        <h3>{spot.address}</h3>
                    </div>
                </div>
                <div className='spot__image__container'>
                    <img className='spot__image' alt='Spot' src={spot?.pictures[0].img_url}/>
                    <div className='spot__image__grid'>
                        <img className='spot__grid__image' alt='Spot' src={spot?.pictures[0].img_url}/>
                        <img className='spot__grid__image' alt='Spot' src={spot?.pictures[0].img_url}/>
                        <img className='spot__grid__image' alt='Spot' src={spot?.pictures[0].img_url}/>
                        <img className='spot__grid__image' alt='Spot' src={spot?.pictures[0].img_url}/>
                    </div>
                </div>
                <div className='spot__utility__container'>
                    <div className='spot__info__container'>
                        <div className='spot__host__container'>
                            <h3>Island hosted by {spot.host.username}</h3>
                            <img alt='host pfp' src={spot.host_image.img_url}/>
                        </div>
                        <div className='spot__description__container'>
                            <p>{spot.description}</p>
                        </div>
                        <div className='spot__amenity__container'>
                            <h4>Amenities this place offers</h4>
                            {spot?.amenities.map((amenity) => (
                                <p>• {amenity.amenity}</p>
                            ))}
                        </div>
                    </div>
                    <div className='spot__booking__container'>
                        
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default SpotsPage