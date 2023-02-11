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
        <div style={{ "--amenity": amenity }}>
            <div className='navbar__amenities'>
                <div onClick={() => setAmenity(1)} id='amenity__active' className='amenity__selector'>
                    <i className="fa-solid fa-house"></i>
                    <p>Developed</p>
                </div>
                <div onClick={() => setAmenity(2)} className='amenity__selector'>
                    <i className="fa-solid fa-campground"></i>
                    <p>Non-developed</p>
                </div>
                <div onClick={() => setAmenity(3)} className='amenity__selector'>
                    <i className="fa-solid fa-lock"></i>
                    <p>Private island</p>
                </div>
                <div onClick={() => setAmenity(4)} className='amenity__selector'>
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <p>Island parcel</p>
                </div>
                <div onClick={() => setAmenity(5)} className='amenity__selector'>
                    <i className="fa-solid fa-car-side"></i>
                    <p>Peninsula</p>
                </div>
                <div onClick={() => setAmenity(6)} className='amenity__selector'>
                    <i className="fa-solid fa-anchor"></i>
                    <p>Ocean island</p>
                </div>
                <div onClick={() => setAmenity(7)} className='amenity__selector'>
                    <i className="fa-solid fa-bridge-water"></i>
                    <p>River island</p>
                </div>
                <div onClick={() => setAmenity(8)} className='amenity__selector'>
                    <i className="fa-solid fa-sailboat"></i>
                    <p>Lake island</p>
                </div>
                <div onClick={() => setAmenity(9)} className='amenity__selector'>
                    <i className="fa-solid fa-plane-arrival"></i>
                    <p>Airstrip</p>
                </div>
                <div onClick={() => setAmenity(10)} className='amenity__selector'>
                    <i className="fa-solid fa-solar-panel"></i>
                    <p>Off-the-grid</p>
                </div>
                <div onClick={() => setAmenity(11)} className='amenity__selector'>
                    <i className="fa-solid fa-water-ladder"></i>
                    <p>Pool</p>
                </div>
                <div onClick={() => setAmenity(12)} className='amenity__selector'>
                    <i className="fa-solid fa-fire"></i>
                    <p>Indoor fireplace</p>
                </div>
                <div onClick={() => setAmenity(13)} className='amenity__selector'>
                    <i className="fa-solid fa-wifi"></i>
                    <p>Wifi</p>
                </div>
                <div onClick={() => setAmenity(14)} className='amenity__selector'>
                    <i className="fa-solid fa-temperature-arrow-down"></i>
                    <p>Air conditioning</p>
                </div>
                <div onClick={() => setAmenity(15)} className='amenity__selector'>
                    <i className="fa-solid fa-earth-americas"></i>
                    <p>American</p>
                </div>
                <div onClick={() => setAmenity(16)} className='amenity__selector'>
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