import React from 'react'
import Person from './Person'

const Persons = ({persons, deleteHandler}) => {

  return (
    <ul>
        {persons.map(person => 
          <Person 
            key={person.id} 
            person={person.name} 
            number={person.number}  
            clickAction={() => deleteHandler(person.id)}
          />
        )}
    </ul>
    )
}

export default Persons