import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisiblityFilter from './components/VisibilityFilter'
import { initalizeNotes } from './reducers/noteReducer'



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initalizeNotes()) 
  },[dispatch]) 
  return(
    <div>
      <NewNote/>
      <VisiblityFilter/>
      <Notes/>
    </div>
  )
}

export default App
