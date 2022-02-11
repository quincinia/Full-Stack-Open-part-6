import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { timedNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const vote = () => {
        console.log('vote', anecdote.id)
        dispatch(addVote(anecdote))
        dispatch(timedNotification(`you voted '${anecdote.content}'`, 5))
    }

    return (
        <div>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote()}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if (filter === 'ALL') {
            return anecdotes
        }
        return anecdotes.filter((anecdote) => anecdote.content.includes(filter))
    })

    return (
        <>
            {anecdotes.map((anecdote) => (
                <Anecdote anecdote={anecdote} key={anecdote.id} />
            ))}
        </>
    )
}

export default AnecdoteList
