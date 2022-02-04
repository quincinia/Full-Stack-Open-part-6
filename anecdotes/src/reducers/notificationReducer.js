const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.message
        default:
            return state
    }
}

export const setNotifMessage = (message) => {
    return {
        type: 'SET_NOTIFICATION',
        message
    }
}

export default notificationReducer