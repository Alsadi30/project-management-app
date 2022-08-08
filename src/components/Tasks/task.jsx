const Task = ({ task }) => {
 

  return (
    <>
      <h1>
        {task.text}
        {task.deadline}
      </h1>
    </>
  )
}

export default Task
