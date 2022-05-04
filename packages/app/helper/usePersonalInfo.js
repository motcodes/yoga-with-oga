import { useReducer } from 'react'

let initialState = {
    gender: { val: '', gotTargeted: false },
    height: { val: '', gotTargeted: false},
    weight: { val: '', gotTargeted: false }
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
    case 'genderChange':
        newState = { ...state, gender: { val: action.value, gotTargeted: true } };
        break;
    case 'heightChange':
        newState = { ...state, height: { val: action.value, gotTargeted: true } };
        break;
    case 'weightChange':
        newState = { ...state, weight: { val: action.value, gotTargeted: true } };
        break;
    default:
        throw new Error();
    }
    return newState;
}

export const usePersonalInfo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch]
}