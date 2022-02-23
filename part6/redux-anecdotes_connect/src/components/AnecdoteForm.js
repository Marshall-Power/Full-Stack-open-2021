import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addNewAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        console.log(content)
        props.createAnecdote(content)
        props.setNotification(`you added '${content}'`, 5000)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addNewAnecdote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      state
    }
  }

  const mapDispatchToProps = {
    createAnecdote,
    setNotification
  }

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps )(AnecdoteForm)
export default ConnectedAnecdoteForm