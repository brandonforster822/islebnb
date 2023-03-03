const FETCH_BOOKINGS = 'booking/fetch'

const fetchBookings = (bookings) => {
    return {
        type: FETCH_BOOKINGS,
        payload: bookings,
    }
}

export const bookSpot = (spotId, startDate, endDate, userId) => async(dispatch) => {
    const response = await fetch('/api/spots/book', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            spotId,
            startDate,
            endDate,
            userId
        })
    })
    const data = await response.json()
    return data
}

export const getBookingsBySpot = (spotId) => async(dispatch) => {
    const response = await fetch(`/api/spots/bookings/${spotId}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    dispatch(fetchBookings(data))
}


const initialState = {}

const bookingsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type){
        case FETCH_BOOKINGS:
            newState = action.payload
            return newState
        default:
            return state
    }
}

export default bookingsReducer