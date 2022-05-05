import { useReducer } from "react"

const initialState = {
    userName: { val: '', gotTargeted: false },
    firstName: { val: '', gotTargeted: false },
    mail: { val: '', gotTargeted: false },
    password: { val: '', gotTargeted: false }
}

const reducer = (state, action) => {
let newState;
switch (action.type) {
    case 'uNameChange':
    newState = { ...state, userName: { val: action.value, gotTargeted: true } };
    break;
    case 'fNameChange':
    newState = { ...state, firstName: { val: action.value, gotTargeted: true } };
    break;
    case 'mailChange':
    newState = { ...state, mail: { val: action.value, gotTargeted: true } };
    break;
    case 'passwordChange':
    newState = { ...state, password: { val: action.value, gotTargeted: true } };
    break;
    default:
    throw new Error();
}
    return newState;
}

export const useSignUp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch]
}