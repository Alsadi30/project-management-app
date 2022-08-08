import useForm from '../../hooks/useForm'
import InputGroup from '../shared/forms/InputGroup'
import Button from '../Ui/buttons/Button'
import shortId from 'shortid'
import { useStoreDispatch } from 'easy-peasy'

const init = {
  title: '',
  description: ''
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Title is Required'
  }

  if (!values.description) {
    errors.description = 'Description is Required'
  }

  return errors
}

const CreateProject = () => {
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

      const newProject = {
        id: shortId(),
        ...newState,
        tasks: [],
        members: []
      }

      dispatch({ type: 'ADDPRO', payload: newProject })
    }
  }

  return (
    <div>
      <h1>Create A Project</h1>
      <form onSubmit={e => handleSubmit(e, cb)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <InputGroup
            value={state.title.value}
            label={'Title:'}
            name={'title'}
            placeholder={'Give a title'}
            error={state.title.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.description.value}
            label={'Description:'}
            name={'description'}
            placeholder={'Add a Description'}
            error={state.description.error}
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

export default CreateProject

// const mapStateToKeys = (state, key) => {
//   return Object.keys(state).reduce((acc, cur) => {
//     acc[cur] = state[cur][key]
//     return acc
//   }, {})
// }
