import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const filteredPersons = persons.filter((person) => person.name.includes(newSearch))

  const addNewPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    let hasPerson = persons.some( person => person['name'] === nameObject['name'] )
    
    if(!hasPerson) {
      setPersons(persons.concat(nameObject))
      setNewName('') 
      setNewNumber('') 
    } else {
      alert(`${newName} is already added to the phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} changeHandler={handleSearchChange}/>
      
      <h3>Add a new</h3>
      <PersonForm 
        onsubmit={addNewPerson} 
        name={newName} 
        namehandler={handleNameChange}
        number={newNumber} 
        numberhandler={handleNumberChange}
      />
      
      <h3>Numbers</h3>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App