import React from 'react'
import { /*useDispatch,*/ connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { timedNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ createAnecdote, timedNotification }) => {
    // const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        // dispatch(createAnecdote(anecdote))
        // dispatch(timedNotification(`you added '${anecdote}'`, 5))
        createAnecdote(anecdote)
        timedNotification(`you added '${anecdote}'`, 5)
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

const mapDispatchToProps = {
    createAnecdote,
    timedNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
