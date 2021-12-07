import React, { useState } from 'react';


const History = (props) => {
  if  (props.allClicks.length === 0) {
   return (
    <div>
      The app is used by pressung the buttons
    </div>
   )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
     {text}
  </button>
)


const App = () => {
  
  const [clicks, setClicks]  = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({ ...clicks, left: clicks.left + 1 })
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({ ...clicks, right: clicks.right + 1 })
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {clicks.right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App