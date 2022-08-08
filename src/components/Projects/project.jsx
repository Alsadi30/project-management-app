import { useStoreState } from 'easy-peasy'
import CreateTask from '../createTask'
import Task from '../Tasks/task'

const Project = ({ project }) => {
  const Tasks = useStoreState(state => {
    return state.Tasks.map(u => u.projectId === project.id)
  })

  return (
    <>
      <h1> {project.title} </h1>
      <p>{project.description}</p>
      {Tasks.map(u => {
        return (
          <li>
            <Task task={u} />
          </li>
        )
      })}
      <h3>
        <CreateTask ProjectId={project.id} />
      </h3>
    </>
  )
}

export default Project
