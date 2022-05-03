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
import { useEffect, useState } from 'react'
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
  const [userName, setUserName] = useState({ val: '', gotTargeted: false })
  const [firstName, setFirstName] = useState({ val: '', gotTargeted: false })
  const [mail, setMail] = useState({ val: '', gotTargeted: false })
  const [password, setPassword] = useState({ val: '', gotTargeted: false })
  
  let uNameBC = '$grey80'
  let fNameBC = '$grey80'
  let mailBC = '$grey80'
  let passwordBC = '$grey80'
  if (userName.gotTargeted && userName.val === '') uNameBC = '$salmon'
  if (firstName.gotTargeted && firstName.val === '') fNameBC = '$salmon'
  if (mail.gotTargeted && mail.val === '') mailBC = '$salmon'
  if (password.gotTargeted && password.val === '') passwordBC = '$salmon'

  const handleChangeUName = text => setUserName({ val: text, gotTargeted: true })
  const handleChangeFName = text => setFirstName({ val: text, gotTargeted: true })
  const handleChangeMail = text => setMail({ val: text, gotTargeted: true })
  const handleChangePassword = text => setPassword({ val: text, gotTargeted: true })

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
          value={userName.val}
          onChange={text => handleChangeUName(text)}
          placeholder="Username*"
          style={{ borderColor: uNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={firstName.val}
          onChange={text => handleChangeFName(text)}
          placeholder="First name*"
          style={{ borderColor: fNameBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={mail.val}
          onChange={text => handleChangeMail(text)}
          placeholder="Email address*"
          style={{ borderColor: mailBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={password.val}
          onChange={text => handleChangePassword(text)}
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
          onClick={() => onClickContinue(mail.val, firstName.val, userName.val, password.val, { push })}
        >
          Continue
        </Button>
        <View sx={{ height: 12 }} />
        <Button variant={'text'}>Sign In</Button>
      </ScrollView>
    </SafeAreaView>
  )
}

async function onClickContinue(mail, firstName, userName, password, { push }) {
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
