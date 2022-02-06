import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setTimer, setNotifMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        dispatch(setNotifMessage(`you added '${anecdote}'`))
        const timer = setTimeout(() => {
            dispatch(setNotifMessage(null))
        }, 5000)
        dispatch(setTimer(timer))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div>
                    <input name="anecdote" />
                </div>
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm
