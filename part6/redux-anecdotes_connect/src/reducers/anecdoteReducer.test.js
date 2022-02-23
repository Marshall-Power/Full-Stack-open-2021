import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'


describe('anecdoteReducer', () => {
    test('Adds a vote to the anecdote', () => {
      const state = [
        {
          content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
          id: 1,
          votes: 0
        }
      ]
      const action = {
        type: 'anecdotes/voteAnecdote',
        payload: 1,
      }
  
      deepFreeze(state)
      const newState = anecdoteReducer(state, action)
  
      expect(newState).toHaveLength(1)
      expect(newState).toContainEqual({
        content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        id: 1,
        votes: 1
      })
    })

    test('Adds new anecdote', () => {
      const state = []
      const action = {
        type: 'anecdotes/addAnecdote',
        data: {
          content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        }
      }
  
      deepFreeze(state)
      const newState = anecdoteReducer(state, action)
  
      expect(newState).toHaveLength(1)
      expect(newState[0].content).toEqual(action.payload)
      expect(newState[0].votes).toEqual(0)
    })
  })