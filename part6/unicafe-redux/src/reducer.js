const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const newGoodState = {
        ...state,
        good: state.good + 1
      }
      return newGoodState
    case 'OK':
      const newOkState = {
        ...state,
        ok: state.ok + 1
      }
      return newOkState
    case 'BAD':
      const newBadState = {
        ...state,
        bad: state.bad + 1
      }
      return newBadState
    case 'ZERO':
      const resetState = {
          good: 0,
          ok: 0,
          bad: 0
        }

      return resetState
    default: return state
  }
  
}

export default counterReducer