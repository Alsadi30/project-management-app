import { reducer } from 'easy-peasy'
import { ADDPRO, UPDPRO } from '../actions/type'

const initialState = []

const Projects = reducer((state = initialState, action) => {
  // Deconstruct action type and payload from action.type and action.payload
  const { type, payload } = action

  switch (type) {
    case ADDPRO:
      // State is immutable, therefore we use spread operator by adding in previous states
      console.log(payload)
      return (state = [...state, payload])

    case UPDPRO:
      return state.filter(alert => alert.id !== payload)

    default:
      return state
  }
})

export default Projects

// const initialState = {
//   id: '',
//   Title: '',
//   Description: '',
//   Tasks: [],
//   Members: []
// }
