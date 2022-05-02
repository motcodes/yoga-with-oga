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
  const [userName, setUserName] = useState()
  const [firstName, setFirstName] = useState()
  const [mail, setMail] = useState()
  const [password, setPassword] = useState()
  
  let uNameBC = '$grey80'
  let fNameBC = '$grey80'
  let mailBC = '$grey80'
  let passwordBC = '$grey80'
  if (userName === '') uNameBC = '$salmon'
  if (firstName === '') fNameBC = '$salmon'
  if (mail === '') mailBC = '$salmon'
  if (password === '') passwordBC = '$salmon'

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
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username*"
          style={{ borderColor: uNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name*"
          style={{ borderColor: fNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={mail}
          onChange={ e => setMail(e.target.value) }
          placeholder="Email address*"
          style={{ borderColor: mailBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={password}
          onChange={ e => setPassword(e.target.value) }
          placeholder="Password*"
          type="password"
          style={{ borderColor: passwordBC }}
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
