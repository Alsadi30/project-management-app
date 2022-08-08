import { createStore, persist } from 'easy-peasy'
import Projects from './reducers/projects'
import Tasks from './reducers/tasks'
import Subtasks from './reducers/subtasks'
import Members from './reducers/members'

const store = createStore(
  persist({
    Projects: Projects,
    Tasks: Tasks,
    Subtask: Subtasks,
    Members: Members
  })
)

export default store
