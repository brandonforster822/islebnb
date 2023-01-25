const MODAL_OPEN_LOGIN = 'loginModal/open'
const MODAL_CLOSE_LOGIN = 'loginModal/close'


export const openLogin = () => {
    return {
        type: MODAL_OPEN_LOGIN,
    }
}

export const closeLogin = () => {
    return {
        type: MODAL_CLOSE_LOGIN,
    }
}


const initialState = {
    loginShow: false,
}

const modalReducer = (state = initialState, action) => {
    
}