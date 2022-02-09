import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setTimer, setNotifMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(anecdote)
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotifMessage(`you added '${newAnecdote.content}'`))
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
