import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'

import notificationsReducer from './reducers/notificationsReducer'
import blogsReducer from './reducers/blogsReducer'

const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        notifications: notificationsReducer
    }
})

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)