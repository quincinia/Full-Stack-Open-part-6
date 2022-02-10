import anecdoteService from '../services/anecdotes'

// Initial state now pulled from database
// const anecdotesAtStart = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// Now obsolete since DB stores anecdotes as objects, and anecdotes are converted to objects in the POST request.
// const asObject = (anecdote) => {
//     return {
//         content: anecdote,
//         id: getId(),
//         votes: 0
//     }
// }

// const initialState = anecdotesAtStart.map(asObject)

const comp = (a, b) => b.votes - a.votes

const anecdoteReducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'VOTE':
            const id = action.data.id
            const anecdoteToChange = state.find((a) => a.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            return state
                .map((anecdote) =>
                    anecdote.id !== id ? anecdote : changedAnecdote
                )
                .sort(comp)
        case 'NEW_ANECDOTE':
            return [...state, action.data.anecdote].sort(comp)
        case 'INIT_ANECDOTES':
            return action.data
        default:
            return state
    }
}

export const addVote = (id) => {
    return {
        type: 'VOTE',
        data: { id }
    }
}

export const createAnecdote = (anecdote) => {
    return {
        type: 'NEW_ANECDOTE',
        data: { anecdote }
    }
}

export const initAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export default anecdoteReducer
