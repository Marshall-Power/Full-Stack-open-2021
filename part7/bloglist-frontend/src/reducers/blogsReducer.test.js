import blogReducer from './blogReducer'
import deepFreeze from 'deep-freeze'


describe('blogReducer', () => {
    test('returns new state with action blogs/addBlog', () => {
        const state = ''
        const action = {
            type: 'blogs/addNewBlog',
            payload: ''
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)

        expect(newState).toEqual('')
    })
    test('adds one like to the state with action blogs/voteBlog', () => {
        const state = ''
        const action = {
            type: 'blogs/addNewBlog',
            payload: ''
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)

        expect(newState).toEqual('')
    })

})