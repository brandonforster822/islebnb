const SPOTS_QUERY = 'spots/query'
const ONE_SPOT = 'spots/one'


const oneSpot = (spot) => {
    return {
        payload: spot,
        type: ONE_SPOT,
    }
}

const spotsQuery = (listArr) => {
    return {
        payload: listArr,
        type: SPOTS_QUERY,
    }
}

export const fetchOneSpot = (spot_id) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spot_id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await response.json()
    dispatch(oneSpot(data))
}

export const fetchSpots = (searchQuery) => async (dispatch) => {
    const response = await fetch(`/api/spots/search`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: searchQuery,
    })
    const data = await response.json()
    data['search_extras'] = {
        searchQuery: searchQuery,
    }
    const ret_obj = {
        spots: data.spots,
        search_extras: { searchQuery: searchQuery },
    }
    dispatch(spotsQuery(ret_obj))
}


const initialState = {}

const spotReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case SPOTS_QUERY:
            newState = action.payload
            return newState
        case ONE_SPOT:
            newState = action.payload
            return newState
        default:
            return state
    }
}


export default spotReducer