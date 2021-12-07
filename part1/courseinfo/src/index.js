import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  const title = props['title'].name;
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

const Content = (props) => {
  const part = props['parts'] 
  return (
    <>
      <Part part={part['parts'][0]}/>
      <Part part={part['parts'][1]}/>
      <Part part={part['parts'][2]}/>
    </>
  )
}

const Total = (props) => {
  const digit = props['digits'];
  return (
    <>
      <p>Number of exercises {digit['parts'][0].exercises + digit['parts'][1].exercises + digit['parts'][2].exercises}</p>
    </>
  )
}

const Part = ({part}) => {
  return (
    <>
      <p>{part['name']} {part['exercises']}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  } 

  return (
    <div>
      <Header title={course}/>
      <Content parts={course}/>
      <Total digits={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
