const initialState = {
    message: null,
    timer: null
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TIMER':
            // Technically this check isn't needed since clearTimeout can be called with invalid IDs
            if (state.timer !== null) {
                clearTimeout(state.timer)
            }
            return {
                ...state,
                timer: action.timer
            }
        case 'SET_NOTIFICATION':
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

export const setTimer = (timer) => {
    return {
        type: 'SET_TIMER',
        timer
    }
}

export const setNotifMessage = (message) => {
    return {
        type: 'SET_NOTIFICATION',
        message
    }
}

export default notificationReducer
