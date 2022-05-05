import notificationsReducer from './notificationsReducer'
import deepFreeze from 'deep-freeze'


describe('notificationsReducer', () => {
    test('Changes notification message', () => {
        const state = ''
        const action = {
            type: 'notification/showNotification',
            payload: 'If it hurts do it more often'
        }

        deepFreeze(state)
        const newState = notificationsReducer(state, action)

        expect(newState).toEqual('If it hurts do it more often')
    })

})