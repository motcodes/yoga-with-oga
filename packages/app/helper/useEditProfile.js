import { useReducer } from 'react'

let initialState = {
  userName: { value: '', gotTargeted: false },
  firstName: { value: '', gotTargeted: false },
  gender: { value: '', gotTargeted: false },
  height: { value: '', gotTargeted: false },
  weight: { value: '', gotTargeted: false },
  userNameBC: '$grey80',
  firstNameBC: '$grey80',
}

const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case 'userNameChange':
      newState = {
        ...state,
        userName: { value: action.value, gotTargeted: true },
      }
      break
    case 'firstNameChange':
      newState = {
        ...state,
        firstName: { value: action.value, gotTargeted: true },
      }
      break
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
    case 'userNameBcChange':
      newState = { ...state, userNameBC: '$salmon' }
      break
    case 'firstNameBcChange':
      newState = { ...state, firstNameBC: '$salmon' }
      break
    default:
      throw new Error()
  }
  return newState
}

export const useEditProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}
