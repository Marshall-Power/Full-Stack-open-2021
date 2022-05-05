import React, { useState, useEffect, useRef } from 'react'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import Notification from './components/Notification'
import blogService from './services/blogs'
import { setBlogs } from './reducers/blogsReducer'
import { setNotification } from './reducers/notificationsReducer'
import { login, logout } from './reducers/loginReducer'
import { useDispatch } from 'react-redux'
// import {
//     BrowserRouter as Router,
//     Routes, Route, Link
// } from 'react-router-dom'
import './index.css'
//import { objectOf } from 'prop-types'

const App = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const blogFormRef = useRef()

    useEffect(() => {
        blogService
            .getAll().then(blogs => dispatch(setBlogs(blogs)))
    }, [dispatch])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            dispatch(login({
                username, password,
            }))


            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            dispatch(setNotification('Wrong credentials', 5000))
        }

        console.log('logging in with', username, password)
    }

    const handleLogout = async (event) => {
        event.preventDefault()

        dispatch(logout())

        console.log('logging out')
    }

    const loginForm = () => (
        <div>
            <h2>log into the application</h2>
            <form onSubmit={handleLogin}>
                <div>
                  username
                    <input
                        id='username-input'
                        type="text"
                        value={username}
                        name="Username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                password
                    <input
                        id='password-input'
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button id="login-button" type="submit">login</button>
            </form>
        </div>
    )


    const blogForm = () => (
        <Togglable buttonLabel='new blog' ref={blogFormRef}>
            <BlogForm/>
        </Togglable>
    )


    return (
        <div>
            <Notification/>

            { user === null && loginForm() }

            { user !== null &&
              <div>
                  <h2>blogs</h2>
                  <div>
                      <p>{user.name} logged-in <button onClick={handleLogout}>logout</button></p>
                  </div>
                  <h2>Create new</h2>
                  <div>
                      {blogForm()}
                  </div>

                  <Blogs/>
              </div>
            }
        </div>
    )
}

export default App