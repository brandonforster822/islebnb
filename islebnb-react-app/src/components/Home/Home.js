import React, { useState, useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSpots } from '../../store/spots'



const Home = () => {
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spot)
    const [amenity, setAmenity] = useState(1)

    useEffect(() => {
        dispatch(fetchAllSpots(''))
    }, [dispatch])

    useEffect(() => {
        handleAmenitySelector(1)
    }, [])

    const amenityChecker = (array) => {
        for (let i = 0; i < array.length; i++){
            if(Object.values(array[i]).indexOf(amenity) > -1){
                return true
            }
        }
        return false
    }

    const handleAmenitySelector = (num) => {
        setAmenity(num)
        document.querySelectorAll('.amenity__selector').forEach((div) => {
            if (div.classList.contains(`amenity__${num}`)){
                div.classList.add('amenity__active')
            } else {
                div.classList.remove('amenity__active')
            }
        })
    }
    
    const spotsArray = spots.spots
    const spotsFilter = spotsArray?.filter((spot) => amenityChecker(spot.amenities))

    return(
        <div style={{ "--amenity": amenity }}>
            <div className='navbar__amenities'>
                <div onClick={() => handleAmenitySelector(1)} id='amenity__active' className='amenity__selector amenity__1'>
                    <i className="fa-solid fa-house"></i>
                    <p>Developed</p>
                </div>
                <div onClick={() => handleAmenitySelector(2)} className='amenity__selector amenity__2'>
                    <i className="fa-solid fa-campground"></i>
                    <p>Non-developed</p>
                </div>
                <div onClick={() => handleAmenitySelector(3)} className='amenity__selector amenity__3'>
                    <i className="fa-solid fa-lock"></i>
                    <p>Private island</p>
                </div>
                <div onClick={() => handleAmenitySelector(4)} className='amenity__selector amenity__4'>
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <p>Island parcel</p>
                </div>
                <div onClick={() => handleAmenitySelector(5)} className='amenity__selector amenity__5'>
                    <i className="fa-solid fa-car-side"></i>
                    <p>Peninsula</p>
                </div>
                <div onClick={() => handleAmenitySelector(6)} className='amenity__selector amenity__6'>
                    <i className="fa-solid fa-anchor"></i>
                    <p>Ocean island</p>
                </div>
                <div onClick={() => handleAmenitySelector(7)} className='amenity__selector amenity__7'>
                    <i className="fa-solid fa-bridge-water"></i>
                    <p>River island</p>
                </div>
                <div onClick={() => handleAmenitySelector(8)} className='amenity__selector amenity__8'>
                    <i className="fa-solid fa-sailboat"></i>
                    <p>Lake island</p>
                </div>
                <div onClick={() => handleAmenitySelector(9)} className='amenity__selector amenity__9'>
                    <i className="fa-solid fa-plane-arrival"></i>
                    <p>Airstrip</p>
                </div>
                <div onClick={() => handleAmenitySelector(10)} className='amenity__selector amenity__10'>
                    <i className="fa-solid fa-solar-panel"></i>
                    <p>Off-the-grid</p>
                </div>
                <div onClick={() => handleAmenitySelector(11)} className='amenity__selector amenity__11'>
                    <i className="fa-solid fa-water-ladder"></i>
                    <p>Pool</p>
                </div>
                <div onClick={() => handleAmenitySelector(12)} className='amenity__selector amenity__12'>
                    <i className="fa-solid fa-fire"></i>
                    <p>Indoor fireplace</p>
                </div>
                <div onClick={() => handleAmenitySelector(13)} className='amenity__selector amenity__13'>
                    <i className="fa-solid fa-wifi"></i>
                    <p>Wifi</p>
                </div>
                <div onClick={() => handleAmenitySelector(14)} className='amenity__selector amenity__14'>
                    <i className="fa-solid fa-temperature-arrow-down"></i>
                    <p>Air conditioning</p>
                </div>
                <div onClick={() => handleAmenitySelector(15)} className='amenity__selector amenity__15'>
                    <i className="fa-solid fa-earth-americas"></i>
                    <p>American</p>
                </div>
                <div onClick={() => handleAmenitySelector(16)} className='amenity__selector amenity__16'>
                    <i className="fa-solid fa-earth-europe"></i>
                    <p>Foreign</p>
                </div>
                <div className='filters__button'>
                    <i className="fa-solid fa-sliders"></i>
                    <p>Filters</p>
                </div>
            </div>
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
        </div>
    )
}

export default Home