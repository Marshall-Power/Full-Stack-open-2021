import React, { useState, useEffect, useRef } from 'react'
<<<<<<< HEAD
import Blogs from './components/Blogs'
=======
import Blog from './components/Blog'
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import Notification from './components/Notification'
import blogService from './services/blogs'
<<<<<<< HEAD
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

=======
import loginService from './services/login'
import './index.css'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const blogFormRef = useRef()

    useEffect(() => {
<<<<<<< HEAD
        blogService
            .getAll().then(blogs => dispatch(setBlogs(blogs)))
    }, [dispatch])
=======
        blogService.getAll().then(blogs =>
            setBlogs( blogs )
        )
    }, [])
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8

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
<<<<<<< HEAD
            dispatch(login({
                username, password,
            }))

=======
            const user = await loginService.login({
                username, password,
            })

            window.localStorage.setItem(
                'loggedBlogappUser', JSON.stringify(user)
            )
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8

            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
<<<<<<< HEAD
            dispatch(setNotification('Wrong credentials', 5000))
=======
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
        }

        console.log('logging in with', username, password)
    }

    const handleLogout = async (event) => {
        event.preventDefault()

<<<<<<< HEAD
        dispatch(logout())
=======
        window.localStorage.removeItem('loggedBlogappUser')
        setUser(null)
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8

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
<<<<<<< HEAD
            <BlogForm/>
        </Togglable>
    )


    return (
        <div>
            <Notification/>

=======
            <BlogForm createBlog={addBlog} />
        </Togglable>
    )

    const addBlog = (blogObject) => {
        blogFormRef.current.toggleVisibility()
        blogService
            .create(blogObject)
            .then(returnedBlog => {
                setBlogs(blogs.concat(returnedBlog))
            })
    }

    return (
        <div>
            <Notification message={errorMessage} />
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
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
<<<<<<< HEAD

                  <Blogs/>
=======
                  {blogs.map(blog =>
                      <Blog key={blog.id} blog={blog} />
                  )}
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
              </div>
            }
        </div>
    )
}

export default App