import { useReducer } from 'react'

let initialState = {
  gender: { value: '', gotTargeted: false },
  height: { value: '', gotTargeted: false },
  weight: { value: '', gotTargeted: false },
  genderBC: '$grey80',
  heightBC: '$grey80',
  weightBC: '$grey80',
}

const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case 'genderChange':
      newState = {
        ...state,
        gender: { value: action.value, gotTargeted: true },
      }
      break
    case 'heightChange':
      newState = {
        ...state,
        height: { value: action.value, gotTargeted: true },
      }
      break
    case 'weightChange':
      newState = {
        ...state,
        weight: { value: action.value, gotTargeted: true },
      }
      break
    case 'genderBcChange':
      newState = { ...state, genderBC: '$salmon' }
      break
    case 'heightBcChange':
      newState = { ...state, heightBC: '$salmon' }
      break
    case 'weightBcChange':
      newState = { ...state, weightBC: '$salmon' }
      break
    default:
      throw new Error()
  }
  return newState
}

export const usePersonalInfo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}
