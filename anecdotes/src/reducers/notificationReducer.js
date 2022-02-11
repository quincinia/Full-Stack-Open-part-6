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
                timer: action.data.timer
            }
        case 'SET_NOTIFICATION':
            // If we wish to clear the notification (using null), then we will also clear the timer
            return {
                message: action.data.message,
                timer: action.data.message === null ? null : state.timer
            }
        default:
            return state
    }
}

export const setTimer = (timer) => {
    return {
        type: 'SET_TIMER',
        data: { timer }
    }
}

export const setNotifMessage = (message) => {
    return {
        type: 'SET_NOTIFICATION',
        data: { message }
    }
}

export const timedNotification = (message, seconds) => {
    return (dispatch) => {
        dispatch(setNotifMessage(message))
        const timer = setTimeout(() => {
            dispatch(setNotifMessage(null))
        }, seconds * 1000)
        dispatch(setTimer(timer))
    }
}

export default notificationReducer
