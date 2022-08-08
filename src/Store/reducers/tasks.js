import { reducer } from 'easy-peasy'
import { ADDTASK } from '../actions/type'

const initialState = []

const Tasks = reducer((state = initialState, action) => {
  // Deconstruct action type and payload from action.type and action.payload
  const { type, payload } = action

  switch (type) {
    case ADDTASK:
      // State is immutable, therefore we use spread operator by adding in previous states
      console.log(payload)
      return (state = [...state, payload])

    default:
      return state
  }
})

export default Tasks
