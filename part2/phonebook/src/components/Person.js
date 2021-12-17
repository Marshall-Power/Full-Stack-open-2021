import React from 'react'

const Person = ({id, person, number, clickAction}) => {
  
  return (
    <li className='person' key={id}>
      {person} {number} <button onClick={clickAction}>Delete</button>
    </li>
  )
}

export default Person