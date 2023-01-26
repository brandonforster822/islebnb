const MODAL_OPEN_LOGIN = 'loginModal/open'
const MODAL_CLOSE_LOGIN = 'loginModal/close'
const MODAL_OPEN_PASSWORD = 'passwordModal/open'
const MODAL_CLOSE_PASSWORD = 'passwordModal/close'


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

export const openPassword = (email) => {
    return {
        type: MODAL_OPEN_PASSWORD,
        payload: email,
    }
}

export const closePassword = () => {
    return {
        type: MODAL_CLOSE_PASSWORD,
    }
}

const initialState = {
    loginShow: false,
    passwordShow: false,
    emailStore: '',
}

const modalReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case MODAL_OPEN_LOGIN:
            newState = Object.assign({}, state, { loginShow: true })
            return newState
        case MODAL_CLOSE_LOGIN:
            newState = Object.assign({}, state, { loginShow: false })
            return newState
        case MODAL_OPEN_PASSWORD:
            newState = Object.assign({}, state, { passwordShow: true }, {emailStore: action.payload })
            return newState
        case MODAL_CLOSE_PASSWORD:
            newState = Object.assign({}, state, { passwordShow: false })
            return newState
        default:
            return state
    }
}

export default modalReducer