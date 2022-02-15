import notificationReducer from './notificationReducer'
import deepFreeze from 'deep-freeze'


describe('notificationReducer', () => {
    test('Changes notification message', () => {
      const state = ''
      const action = {
        type: 'VOTED_NOTIFICATION',
        data: {
          notification: 'If it hurts do it more often'
        }
      }
  
      deepFreeze(state)
      const newState = notificationReducer(state, action)
  
      expect(newState).toEqual("You voted 'If it hurts do it more often'")
    })

    
  })