import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { DateRange } from "react-date-range";
import { fetchOneSpot } from '../../store/spots'

import './SpotsPage.css'



const SpotsPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const spot = useSelector((state) => state.spot)
    
    const [totalPrice, setTotalPrice] = useState(0)
    const [ranges, setRanges] = useState([
        {
            start: new Date(),
            endDate: null,
            key: 'selection',
        },
    ])

    const today = new Date()

    useEffect(() => {
        if(spot.id === undefined){
            dispatch(fetchOneSpot(id))
        }
    })

    useEffect(() => {
        const priceFormula = (Math.abs(ranges[0].endDate - ranges[0].startDate) / 86400000) + 1
        if(isNaN(priceFormula) === false){
            setTotalPrice((parseInt(priceFormula) * spot.price).toFixed(2))
        }
    }, [])



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
                        <div className='booking__header__container'>
                            <div className='booking__header__price'>
                                <h3>${spot.price}</h3>
                                <p>night</p>
                            </div>
                            <div className='booking__header__rating'>
                                <i class="fa-solid fa-star"></i>
                                <h5>{spot.rating} • </h5>
                                <p>{spot.reviews_count} reviews</p>
                            </div>
                        </div>
                        <div>
                            <DateRange 
                                startDatePlaceholder='Add date'
                                endDatePlaceholder='Add date'
                                showMonthAndYearPickers={false}
                                minDate={today}
                                editableDateInputs={true}
                                onChange={(item) => setRanges([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={ranges}
                            />
                        </div>
                        <div className='booking__submit__container'>
                            <button type='submit'>Reserve</button>
                            <div className='booking__total__container'>
                                <p>Total</p>
                                <p>${totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default SpotsPage