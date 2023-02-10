import React, { useState, useEffect } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

const Account = () => {
    const huh = useParams()

    console.log(">>>>>>> " + JSON.stringify(huh))



    return(
        <div>
            <p>hehe</p>
        </div>
    )
}

export default Account