const notificationReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch(action.type) {
        case 'VOTED_NOTIFICATION':
            const notification_voted = action.data.notification
            return `You voted '${notification_voted}'`
        case 'ADDED_NOTIFICATION':
            const notification_added = action.data.notification
            return `You added '${notification_added}'`
        case 'REMOVE_NOTIFICATION':
            return ''
        default:
            return state
    }
}

export const votedNotification = notification => {
    return {
      type: 'VOTED_NOTIFICATION',
      data: { notification },
    }
  }

export const addedNotification = notification => {
    return {
        type: 'ADDED_NOTIFICATION',
        data: { notification },
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer