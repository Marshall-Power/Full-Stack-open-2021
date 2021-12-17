import React from 'react'

const Filter = ({value, changeHandler}) => { 
  return (
    <input value={value} onChange={changeHandler} />
  )
}

export default Filter