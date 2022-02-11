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
            return state
                .map((anecdote) =>
                    anecdote.id !== id ? anecdote : action.data
                )
                .sort(comp)
        case 'NEW_ANECDOTE':
            return [...state, action.data].sort(comp)
        case 'INIT_ANECDOTES':
            return action.data
        default:
            return state
    }
}

export const addVote = (anecdote) => {
    return async (dispatch) => {
        let changedAnecdote = {
            ...anecdote,
            votes: anecdote.votes + 1
        }
        changedAnecdote = await anecdoteService.updateVote(changedAnecdote, anecdote.id)
        return dispatch({
            type: 'VOTE',
            data: changedAnecdote
        })
    }
}

export const createAnecdote = (anecdote) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.createNew(anecdote)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote
        })
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
