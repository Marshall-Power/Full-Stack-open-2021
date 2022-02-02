import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')

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

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: newTitle,
            author: newAuthor,
            url: newUrl
        })

        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
    }

    return (
        <form onSubmit={addBlog}>
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

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}

export default BlogForm