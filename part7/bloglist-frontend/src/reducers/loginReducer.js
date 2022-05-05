import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login.js'

const loggedInUserJSON = JSON.parse(
    window.localStorage.getItem('loggedInBloglistUser'),
)

const initialState = loggedInUserJSON ? loggedInUserJSON : null

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser(state, action) {
            const credentials = action.payload
            return credentials
        },
        logoutUser() {
            return null
        }
    }
})

export const login = ({ username, password }) => {
    return async dispatch => {
        const user = await loginService.login({ username, password })

        dispatch(loginUser(user))

        window.localStorage.setItem(
            'loggedBlogappUser', JSON.stringify(user)
        )
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch(logoutUser())

        window.localStorage.removeItem('loggedBlogappUser')
    }
}

export const { loginUser, logoutUser } = loginSlice.actions
export default loginSlice.reducer