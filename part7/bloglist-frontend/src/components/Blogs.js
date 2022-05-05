import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, deleteBlog } from '../reducers/blogsReducer'
import { setNotification } from '../reducers/notificationsReducer'



const Blog = ({ blog, upvote, removeBlog }) => {

    //console.log(blog)

    const handleLike = () => {
        upvote(blog.id)
    }

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to remove the blog: ${blog.title}`)) {
            removeBlog(blog.id)
        }
    }

    return (
        <div className='blog'>
            {blog.title} by {blog.author} has {blog.likes} likes <button onClick={handleLike}>Like</button> <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

const Blogs = () => {
    const blogs = useSelector(state => state.blogs)
    const dispatch = useDispatch()

    const addLike = (id, content) => {
        dispatch(addVote(id))
        dispatch(setNotification(`${content} voted`, 5000))
    }

    const removeBlog = (id, title) => {
        dispatch(deleteBlog(id))
        dispatch(setNotification(`${title} removed`, 5000))
    }

    return(
        <div>
            {blogs.map(blog =>
                <Blog
                    key={blog.id}
                    blog={blog}
                    upvote={() => addLike(blog.id, blog.title)}
                    removeBlog={() => removeBlog(blog.id, blog.title)}
                />
            )}
        </div>
    )
}

export default Blogs