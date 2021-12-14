import React from 'react'

const FormInput = ({name, value, handler}) => {
    return (
        <div>
            {name}: <input value={value} onChange={handler} />
        </div>
    )
}

const PersonForm = ({onsubmit, name, namehandler, number, numberhandler}) => {
  return (
    <form onSubmit={onsubmit}>
        <FormInput name='name' value={name} handler={namehandler}/>
        <FormInput name='number' value={number} handler={numberhandler}/>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm