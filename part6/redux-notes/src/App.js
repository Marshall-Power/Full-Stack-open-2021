import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisiblityFilter from './components/VisibilityFilter'

const App = () => {
  return(
    <div>
      <NewNote/>
      <VisiblityFilter/>
      <Notes/>
    </div>
  )
}

export default App
