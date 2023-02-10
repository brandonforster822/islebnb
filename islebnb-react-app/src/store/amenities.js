const GET_AMENITY = 'amenity/get'

export const getAmenity = (amenity_id) =>{
    return{
        type: GET_AMENITY,
        payload: amenity_id,
    }
}


const initialState = 1

const amenityReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type){
        case GET_AMENITY:
            newState = action.payload
            return newState
        default:
            return state
    }
}

export default amenityReducer