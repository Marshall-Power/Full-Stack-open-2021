import React, { useState } from 'react'
<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import blogService from '../services/blogs'
import { addNewBlog } from '../reducers/blogsReducer'

const BlogForm = () => {
=======
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')

<<<<<<< HEAD
    const dispatch = useDispatch()
    //const blogFormRef = useRef()

=======
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
    const handleTitleChange = (event) => {
        console.log(event.target.value)
        setNewTitle(event.target.value)
    }

    const handleAuthorChange = (event) => {
        console.log(event.target.value)
        setNewAuthor(event.target.value)
    }

    const handleUrlChange = (event) => {
        console.log(event.target.value)
        setNewUrl(event.target.value)
    }

<<<<<<< HEAD

    const createBlog = async (event) => {
        event.preventDefault()
        //blogFormRef.current.toggleVisibility()
        const content = {
            title: newTitle,
            author: newAuthor,
            url: newUrl,
            likes: 0
        }

        const newBlog = await blogService.create(content)
        dispatch(addNewBlog(newBlog))
=======
    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: newTitle,
            author: newAuthor,
            url: newUrl
        })
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8

        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
    }

    return (
<<<<<<< HEAD
        <form onSubmit={createBlog}>
=======
        <form onSubmit={addBlog}>
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
            <label>title:</label>
            <input
                id='title-input'
                value={newTitle}
                onChange={handleTitleChange}
            />
            <br/>
            <label>author:</label>
            <input
                id='author-input'
                value={newAuthor}
                onChange={handleAuthorChange}
            />
            <br/>
            <label>url:</label>
            <input
                id='url-input'
                value={newUrl}
                onChange={handleUrlChange}
            />
            <br/>
            <button type="submit">create new blog</button>
        </form>
    )
}

<<<<<<< HEAD

=======
BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8

export default BlogForm