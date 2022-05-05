import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
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
=======
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
