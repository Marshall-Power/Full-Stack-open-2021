import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props['parts'][0]}/>
      <Part part={props['parts'][1]}/>
      <Part part={props['parts'][2]}/>
    </>
  )
}

const Total = (props) => {
  const part = props['parts'];
  return (
    <>
      <p>Number of exercises {part[0].exercises + part[1].exercises +part[2].exercises}</p>
    </>
  )
}

const Part = (props) => {
  const part = props['part'];
  return (
    <>
      <p>{part['name']} {part['exercises']}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
