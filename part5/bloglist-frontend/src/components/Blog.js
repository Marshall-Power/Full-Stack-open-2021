import React from 'react'
const Blog = ({ blog }) => (
    <div className='blog'>
        {blog.title} by {blog.author}
    </div>
)

export default Blog