import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    const vote = (id, content) => {
        console.log('vote', id)
        props.addVote(id)
        props.removeNotification()
        props.setNotification(`you voted '${content}'`, 5000)
      }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content} has {anecdote.votes} votes
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    addVote,
    setNotification,
    removeNotification
  }

const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList