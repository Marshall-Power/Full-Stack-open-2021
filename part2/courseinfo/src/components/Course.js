import React from 'react'

const Course = ({courses}) => {
  return (
      courses.map(course => 
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      )
  )
 }

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  return (
      <Parts part={course.parts} />
  )
}

const Parts = ({part}) => {
  return (
    <div>
       {
         part.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p> )
        } 
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <p><b>Total of {total} exercices</b></p>
  ) 
}

export default Course