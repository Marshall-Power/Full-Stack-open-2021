import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import blogService from '../services/blogs'
import { addNewBlog } from '../reducers/blogsReducer'

const BlogForm = () => {
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')

    const dispatch = useDispatch()
    //const blogFormRef = useRef()

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

        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
    }

    return (
        <form onSubmit={createBlog}>
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



export default BlogForm