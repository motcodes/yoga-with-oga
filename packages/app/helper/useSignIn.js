import { useReducer } from "react";

const initialState = {
    mail: { val: '', gotTargeted: false },
    password: { val: '', gotTargeted: false },
    mailBC: '$grey80',
    passwordBC: '$grey80'
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
    case 'mailChange':
        newState = { ...state, mail: { val: action.value, gotTargeted: true } };
        break;
    case 'passwordChange':
        newState = { ...state, password: { val: action.value, gotTargeted: true } };
        break;
    case 'mailBcChange':
        newState = { ...state, mailBC: '$salmon' };
        break;
    case 'passwordBcChange':
        newState = { ...state, passwordBC: '$salmon' };
        break;
    default:
        throw new Error();
    }
    return newState;
}

export const useSignIn = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch]
}