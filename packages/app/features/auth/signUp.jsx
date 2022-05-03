import {
  Box,
  Flex,
  H3,
  H4,
  H5,
  extraSmall,
  Text,
  View,
  useSx,
  ScrollView,
  SafeAreaView,
} from 'dripsy'
import { useEffect, useState, useReducer } from 'react'
import { TextLink } from 'solito/link'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useRouter } from 'solito/router'
import { InputErrorToast } from '../components/inputErrorToast'

import { auth, db } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, collection, setDoc } from 'firebase/firestore'

export function SignUp({ user, setUser }) {
  const { push, replace, back, parseNextPath } = useRouter()

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

  const [state, dispatch] = useReducer(reducer, initialState)
  
  let uNameBC = '$grey80'
  let fNameBC = '$grey80'
  let mailBC = '$grey80'
  let passwordBC = '$grey80'
  if (state.userName.gotTargeted && state.userName.val === '') uNameBC = '$salmon'
  if (state.firstName.gotTargeted && state.firstName.val === '') fNameBC = '$salmon'
  if (state.mail.gotTargeted && state.mail.val === '') mailBC = '$salmon'
  if (state.password.gotTargeted && state.password.val === '') passwordBC = '$salmon'

  const [modalVisible, setModalVisible] = useState(false)
  const sx = useSx()

  const onClickContinue = (mail, firstName, userName, password, { push }) => {
    if (mail && firstName && userName && password) {
      onSignUpSubmit(mail, firstName, userName, password)
    } else {
      console.log('Du hast was vergessen!')

      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
  }

  const onSignUpSubmit = async (mail, firstName, userName, password) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        mail,
        password
      )
  
      const uId = userCredentials.user.uid
      await setDoc(doc(db, 'users', uId), {
        firstName: firstName,
        userName: userName,
      })
  
      push('/')
    } catch (error) {
      console.log(error)

      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
          mx: 16,
        }}
      >
        <InputErrorToast modalVisible={modalVisible} />

        <Text variant={'base'} sx={{ color: '$green' }}>
          Welcome to Yoga with Oga
        </Text>
        <Text variant={'small'} sx={{ color: '$greenLight' }}>
          Create an account to access yoga sessions, meditations and more
        </Text>
        <View sx={{ height: 16 }} />
        <Input
          value={state.userName.val}
          onChange={text => dispatch({ type: 'uNameChange', value: text })}
          placeholder="Username*"
          style={{ borderColor: uNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={state.firstName.val}
          onChange={text => dispatch({ type: 'fNameChange', value: text })}
          placeholder="First name*"
          style={{ borderColor: fNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={state.mail.val}
          onChange={text => dispatch({ type: 'mailChange', value: text })}
          placeholder="Email address*"
          style={{ borderColor: mailBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={state.password.val}
          onChange={text => dispatch({ type: 'passwordChange', value: text })}
          placeholder="Password*"
          type="password"
          style={{ borderColor: passwordBC }}
          secureTextEntry={true}
        />

        <View sx={{ height: 16 }} />
        <Text variant={'extraSmall'} sx={{ color: '$grey45' }}>
          By signing up, you’re agree to our Terms and Conditions and Privacy
          Policy
        </Text>
        <View sx={{ height: 24 }} />

        <Button
          onClick={() => onClickContinue(state.mail.val, state.firstName.val, state.userName.val, state.password.val, { push, setModalVisible, modalVisible })}
        >
          Continue
        </Button>
        <View sx={{ height: 12 }} />
        <Button variant={'text'}>Sign In</Button>
      </ScrollView>
    </SafeAreaView>
  )
}
