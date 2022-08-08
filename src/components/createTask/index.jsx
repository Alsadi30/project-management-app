import useForm from '../../hooks/useForm'
import InputGroup from '../shared/forms/InputGroup'
import Button from '../Ui/buttons/Button'
import shortId from 'shortid'
import { useStoreDispatch } from 'easy-peasy'

const init = {
  text: '',
  deadline: ''
}

const validate = values => {
  const errors = {}

  if (!values.text) {
    errors.text = 'text is Required'
  }

  if (!values.deadline) {
    errors.deadline = 'deadline is Required'
  }

  return errors
}

const CreateTask = ({ ProjectId }) => {
  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    clear
  } = useForm({ init, validate })

  const dispatch = useStoreDispatch()

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      alert('[ERROR]' + JSON.stringify(errors))
    } else {
      const newState = Object.keys(state).reduce((acc, cur) => {
        acc[cur] = state[cur].value
        return acc
      }, {})

      const newTask = {
        id: shortId(),
        projectId: ProjectId,
        ...newState,
        subtasks: [],
        status: false,
        asignMembers: []
      }

      dispatch({ type: 'ADDTASK', payload: newTask })
    }
  }

  return (
    <div>
      <h4>Add A Task</h4>
      <form onSubmit={e => handleSubmit(e, cb)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <InputGroup
            value={state.text.value}
            label={'Text:'}
            name={'text'}
            placeholder={'Give a text'}
            error={state.text.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.deadline.value}
            label={'deadline:'}
            name={'deadline'}
            placeholder={'Add a deadline'}
            error={state.deadline.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <div>
            <Button type='reset' onClick={clear}>
              Clear
            </Button>
            <Button type='submit'>Submit</Button>
          </div>
        </div>
      </form>
      <hr />
    </div>
  )
}

export default CreateTask
