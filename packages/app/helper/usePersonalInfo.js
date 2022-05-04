import { useReducer } from 'react'

let initialState = {
    gender: { val: '', gotTargeted: false },
    height: { val: '', gotTargeted: false},
    weight: { val: '', gotTargeted: false },
    genderBC: '$grey80',
    heightBC: '$grey80',
    weightBC: '$grey80'
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
    case 'genderBcChange':
        newState = { ...state, genderBC: '$salmon' };
        break;
    case 'heightBcChange':
        newState = { ...state, heightBC: '$salmon' };
        break;
    case 'weightBcChange':
        newState = { ...state, weightBC: '$salmon' };
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