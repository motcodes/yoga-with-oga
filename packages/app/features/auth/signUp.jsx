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
import { useState } from 'react'
import { TextLink } from 'solito/link'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useRouter } from 'solito/router'

import { auth, db } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, collection, setDoc } from 'firebase/firestore'

export function SignUp({ user, setUser }) {
  const { push, replace, back, parseNextPath } = useRouter()
  //const [inputs, setInputs] = useState({ userName: '', firstName: '', mail: '', password: '' })
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState()
  const [mail, setMail] = useState()
  const [password, setPassword] = useState()
  
  let uNameBC = '$grey80'
  let fNameBC = '$grey80'
  let mailBC = '$grey80'
  let passwordBC = '$grey80'
  /*if (userName === '') uNameBC = '$salmon'
  if (firstName === '') fNameBC = '$salmon'
  if (mail === '') mailBC = '$salmon'
  if (password === '') passwordBC = '$salmon'*/

  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
          mx: 16,
        }}
      >
        <Text variant={'base'} sx={{ color: '$green' }}>
          Welcome to Yoga with Oga
        </Text>
        <Text variant={'small'} sx={{ color: '$greenLight' }}>
          Create an account to access yoga sessions, meditations and more
        </Text>
        <View sx={{ height: 16 }} />
        <Input
          value={userName}
          onChange={text => window.location ? setUserName(text.target.value) : setUserName(text)}
          placeholder="Username*"
          style={{ borderColor: uNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={firstName}
          onChange={text => window.location ? setFirstName(text.target.value) : setFirstName(text)}
          placeholder="First name*"
          style={{ borderColor: fNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={mail}
          onChange={text => window.location ? setMail(text.target.value) : setMail(text)}
          placeholder="Email address*"
          style={{ borderColor: mailBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={password}
          onChange={text => window.location ? setPassword(text.target.value) : setPassword(text)}
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
          onClick={() => onClickContinue(mail, firstName, userName, password, { push })}
        >
          Continue
        </Button>
        <View sx={{ height: 12 }} />
        <Button variant={'text'}>Sign In</Button>
      </ScrollView>
    </SafeAreaView>
  )
}

function onClickContinue(mail, firstName, userName, password, { push }) {
  if (mail && firstName && userName && password) {
    onSignUpSubmit(mail, firstName, userName, password)
    push('/')
  } else {
    console.log('Du hast was vergessen!')
    console.log(userName)
  }
}

async function onSignUpSubmit(mail, firstName, userName, password) {
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
  } catch (error) {
    console.log(error)
  }
}
