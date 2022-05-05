import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs.js'

const blogSlice = createSlice({
    name: 'blog',
    initialState: [],
    reducers: {
        setBlogs(state, action) {
            return action.payload
        },
        addNewBlog(state, action) {
            const newBlog = action.payload
            state.push(newBlog)
        },
        voteBlog(state, action) {
            const id = action.payload
            const blogToVote = state.find(n => n.id === id)
            const changedBlog = {
                ...blogToVote,
                likes: blogToVote.likes + 1
            }
            return state.map(blog =>
                blog.id !== id ? blog : changedBlog )
        },
        removeBlog(state, action) {
            const id = action.payload
            return state.filter(blog => blog.id !== id)
        }
    }
})

export  const initalizeBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch(setBlogs(blogs))
    }
}

export const addVote = (id) => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        const blogToLike = blogs.find(n => n.id === id)
        blogToLike.likes++
        await blogService.update(id, blogToLike)
        dispatch(voteBlog(id))
    }
}

export const deleteBlog = (id) => {
    return async dispatch => {
        await blogService.remove(id)
        dispatch(removeBlog(id))
    }
}

export const { setBlogs, addNewBlog, voteBlog, removeBlog } = blogSlice.actions
export default blogSlice.reducer