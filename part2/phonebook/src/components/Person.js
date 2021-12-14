import React from 'react'

const Person = ({id, person, number}) => {
    
  return (
    <li key={id}>
      {person} {number}
    </li>
  )
}

export default Person