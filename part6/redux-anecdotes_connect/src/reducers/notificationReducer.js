import { createSlice } from "@reduxjs/toolkit"

let timeOutId;

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: [],
    reducers: {
        showNotification(state, action) {
            const content = action.payload
            return content
        },
        removeNotification(state, action) {
            return ''
        }
    }
})

export const setNotification = (content, time) => {
    return async dispatch => {
        clearTimeout(timeOutId)
        dispatch(showNotification(content))
        timeOutId = setTimeout(() => {
            dispatch(removeNotification())
        }, time)
    }
}


export const { showNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer