import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { DateRange } from "react-date-range";
import { fetchOneSpot } from '../../store/spots'
import { openLogin } from "../../store/modal"
import * as bookingActions from '../../store/bookings'
import './SpotsPage.css'



const SpotsPage = ({ authenticated }) => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const spot = useSelector((state) => state.spot)
    const session = useSelector((state) => state.session)
    const bookingDates = useSelector((state) => state.booking)
    
    const [totalPrice, setTotalPrice] = useState(0)
    const [dateRangeShake, setDateRangeShake] = useState('')
    const [disabledDates, setDisabledDates] = useState()
    const [ranges, setRanges] = useState([
        {
            start: new Date(),
            endDate: null,
            key: 'selection',
        },
    ])
    
    const today = new Date()

    const getDateRange = (array) => {
        const dates = [];
    
        for(let i = 0; i < array.length; i++){
            let currentDate = new Date(array[i].start_date);
            let endDate = new Date(array[i].end_date)
            while (currentDate <= endDate) {
                dates.push(currentDate);
        
                currentDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    currentDate.getDate() + 1,
                );
            }
        }
        setDisabledDates(dates)
        return
    };

    useEffect(() => {
        if(spot.id === undefined){
            dispatch(fetchOneSpot(id))
        } else {
            dispatch(bookingActions.getBookingsBySpot(spot.id))
        }
    }, [spot.id, dispatch])

    useEffect(() => {
        const priceFormula = (Math.abs(ranges[0].endDate - ranges[0].startDate) / 86400000) + 1
        if(isNaN(priceFormula) === false){
            setTotalPrice((parseInt(priceFormula) * spot.price).toFixed(2))
        }
    }, [ranges, spot.price])

    useEffect(() => {
        if(bookingDates.bookings !== undefined){
            getDateRange(bookingDates.bookings)
        }
    }, [bookingDates])
    
    const handleBook = () => {
        if (!session.id) {
            dispatch(openLogin())
        }
        else if (ranges[0].startDate === null || ranges[0].endDate === null){
            setDateRangeShake('date__range__shake')
            setTimeout(() => {
                setDateRangeShake('')
            }, 300)
            return
        }
        else if (authenticated) {
            dispatch(
                bookingActions.bookSpot(
                    spot.id,
                    ranges[0].startDate,
                    ranges[0].endDate,
                    session.id
                )
            )
            console.log('test')
        }
    }

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
                                disabledDates={disabledDates}
                                onChange={(item) => setRanges([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={ranges}
                                className={dateRangeShake}
                            />
                        </div>
                        <div className='booking__submit__container'>
                            <button onClick={() => handleBook()}>Reserve</button>
                            <div className='booking__total__container'>
                                <p>Total</p>
                                <p>${totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='spot__reviews__container'>
                    <div className='spot__reviews__header'>
                        <i class="fa-solid fa-star"></i>
                        <h3>{spot.rating} • {spot.reviews_count} reviews</h3>
                    </div>
                    <div className='spot__reviews__list'>
                        {spot.reviews.map((review) => (
                            <div className='spot__review__container'>
                                <div className='spot__review__header'>
                                    <img alt={`pfp_${review.user.id}`} src={review.img.img_url}/>
                                    <h5>{review.user.username}</h5>
                                </div>
                                <div className='spot__review__comment'>
                                    <p>{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default SpotsPage