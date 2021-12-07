import React, { useState } from 'react'

 // a proper place to define a component
 const Statistics = ({good, neutral, bad}) => {
   
  let all = good + neutral + bad,
      average = (good - bad)/(good + neutral + bad),
      positive = ((good/(good + neutral + bad)) * 100) + " %";


  if ( good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average " value={average}  />
          <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr> 
      <td>{text}</td> 
      <td>{value}</td> 
    </tr>
  )
}


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Statistics good={good}  neutral={neutral}  bad={bad}/>
    </div>
  )
}

export default App