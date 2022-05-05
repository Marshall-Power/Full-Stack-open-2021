import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState : '',
    reducers: {
        showNotification(state, action) {
            const content = action.payload
            return content
        },
        removeNotification() {
            return ''
        }
    }
})

export const setNotification = (content, time) => {
    return async dispatch => {
        dispatch(showNotification(content))
        setTimeout(() => {
            dispatch(removeNotification())
        }, time)
    }
}

export const { showNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer