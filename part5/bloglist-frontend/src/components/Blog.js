import React from 'react'
const Blog = ({ blog, upvote, removeBlog }) => {

    console.log(blog)

    const handleLike = () => {
        blog.likes++
        upvote(blog.id, blog)
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

export default Blog