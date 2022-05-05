import { useReducer } from 'react'

let initialState = {
    userName: { val: '', gotTargeted: false },
    firstName: { val: '', gotTargeted: false },
    gender: { val: '', gotTargeted: false },
    height: { val: '', gotTargeted: false},
    weight: { val: '', gotTargeted: false },
    userNameBC: '$grey80',
    firstNameBC: '$grey80'
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
    case 'userNameChange':
        newState = { ...state, userName: { val: action.value, gotTargeted: true } };
        break;
    case 'firstNameChange':
        newState = { ...state, firstName: { val: action.value, gotTargeted: true } };
        break;
    case 'genderChange':
        newState = { ...state, gender: { val: action.value, gotTargeted: true } };
        break;
    case 'heightChange':
        newState = { ...state, height: { val: action.value, gotTargeted: true } };
        break;
    case 'weightChange':
        newState = { ...state, weight: { val: action.value, gotTargeted: true } };
        break;
    case 'userNameBcChange':
        newState = { ...state, userNameBC: '$salmon' };
        break;
    case 'firstNameBcChange':
        newState = { ...state, firstNameBC: '$salmon' };
        break;
    default:
        throw new Error();
    }
    return newState;
}

export const useEditProfile = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch]
}