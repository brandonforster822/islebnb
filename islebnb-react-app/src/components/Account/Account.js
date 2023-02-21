import React, { useState, useEffect } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'

const Account = () => {
    const session = useSelector((state) => state.session)

    return(
        <div className='account__page__container'>
            <div className='account__page__header'>
                <h2>Account</h2>
                <div className='account__page__subheader'>
                    <h3>{session.username},</h3>
                    <p>{session.email} •</p>
                    <a href='https://google.com'>Go to profile</a>
                </div>
            </div>
            <div className='account__panel__container'>
                <div className='account__panel__personal'>
                    <div className='account__personal__content'>
                        <i className="fa-solid fa-id-card"></i>
                        <h4>Personal info</h4>
                        <p>Provide personal details or update your password and secure your account</p>
                    </div>
                </div>
                <div className='account__panel__bookings'>
                    <div className='account__bookings__content'>
                        <i className="fa-solid fa-book-bookmark"></i>
                        <h4>Bookings</h4>
                        <p>Find your already booked island vacations</p>
                    </div>
                </div>
                <div className='account__panel__reviews'>
                    <div className='account__reviews__content'>
                        <i className="fa-solid fa-star"></i>
                        <h4>Reviews</h4>
                        <p>Find reviews you've left on other host's islands</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account