import React from 'react'
import { useStoreState } from 'easy-peasy'
import Project from './project'
import { useEffect, useState } from 'react'

const Projects = () => {
  const Projects = useStoreState(state => state.Projects)

  const [st, setst] = useState(Projects)

  useEffect(() => {
    setst(Projects)
  }, [Projects])

  console.log(Projects)

  return (
    <>
      {st.map(u => {
        return (
          <li>
            <Project project={u} />
          </li>
        )
      })}
    </>
  )
}

export default Projects
