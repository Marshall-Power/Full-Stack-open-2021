import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/personservice'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const filteredPersons = persons.filter((person) => person.name.includes(newSearch))
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }

  useEffect(hook, [])

 
  const deletePerson = (id) => {

    const delPerson = persons.find(p => p.id === id)

    window.confirm(`Are you sure you want to delete ${delPerson.name}?`) 
    ?  
    personService
    .deletePerson(id)
    .then(
      setPersons(persons.filter(p => p.id !== id))
    )
    : console.log(`${delPerson.name} not deleted`)
  }

    
  
  const addNewPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    let hasPerson = persons.some( person => person['name'] === nameObject['name'] )
    
    if(!hasPerson) {
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewSearch('')
        setErrorMessage(`${returnedPerson.name} has been added`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
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
      <Notification message={errorMessage} />
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
      <Persons persons={filteredPersons} deleteHandler={deletePerson}/>
    </div>
  )
}

export default App