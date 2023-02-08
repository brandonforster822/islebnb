import React from 'react'
import './Home.css'
const Home = () => {


    return(
        <div className='home__list__container'>
            <div className='home__list__item'>
                <img alt='beach' src='https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg'/>
                <div className='list__item__header'>
                    <h5>Bella Vista, Arkansas</h5>
                    <div className='list__item__container'>
                        <i className="fa-solid fa-star"></i>
                        <p>4.93</p>
                    </div>
                </div>
                <p>516 miles away</p>
                <p>$315 night</p>
            </div>
        </div>
    )
}

export default Home