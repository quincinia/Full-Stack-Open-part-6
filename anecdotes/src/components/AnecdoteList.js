import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setTimer, setNotifMessage } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVote(id))
        dispatch(setNotifMessage(`you voted '${anecdote.content}'`))
        const timer = setTimeout(() => {
            dispatch(setNotifMessage(null))
        }, 5000)
        dispatch(setTimer(timer))
    }

    return (
        <div>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
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
