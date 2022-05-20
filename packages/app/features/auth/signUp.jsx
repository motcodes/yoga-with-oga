import { Text, View, ScrollView, SafeAreaView, Image } from 'dripsy'
import { useEffect, useState } from 'react'
import { useRouter } from 'solito/router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { TextLink } from 'solito/link'

import { Input } from '../components/input'
import { Button } from '../components/button'
import { InputErrorToast } from '../components/inputErrorToast'
import { Logo } from '../components/logo'
import { useSignUp } from '../../helper'

import { auth, db } from '../../firebase/client'
import { useUser } from '../../provider/userContext'

export function SignUp({ onSuccessfulCheckClick, onFailedCheckClick }) {
  const router = useRouter()
  const { user, setUser } = useUser()
  const [state, dispatch] = useSignUp()
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (user && user.id) {
      router.push('/')
    }
  }, [user])

  useEffect(() => {
    if (state.userName.gotTargeted && state.userName.value === '') {
      dispatch({ type: 'uNameBcChange' })
    }
    if (state.firstName.gotTargeted && state.firstName.value === '') {
      dispatch({ type: 'fNameBcChange' })
    }
    if (state.mail.gotTargeted && state.mail.value === '') {
      dispatch({ type: 'mailBcChange' })
    }
    if (state.password.gotTargeted && state.password.value === '') {
      dispatch({ type: 'passwordBcChange' })
    }
  }, [state])

  const onClickContinue = () => {
    if (
      state.mail.value &&
      state.firstName.value &&
      state.userName.value &&
      state.password.value
    ) {
      if (process.env.NODE_ENV === 'test') {
        onSuccessfulCheckClick()
      }
      onSignUpSubmit()
    } else {
      if (process.env.NODE_ENV === 'test') {
        onFailedCheckClick()
      }
      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false)
      }, 2000)
    }
  }

  const onSignUpSubmit = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        state.mail.value,
        state.password.value
      )

      const uId = userCredentials.user.uid
      await setDoc(doc(db, 'users', uId), {
        firstName: state.firstName.value,
        userName: state.userName.value,
      })

      setUser({
        id: uId,
        userName: state.userName.value,
        firstName: state.valfirstName.value,
      })

      router.push('/')
    } catch (error) {
      console.log(error)

      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false)
      }, 2000)
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
        <View sx={{ height: 48 }} />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/yoga-with-oga.appspot.com/o/yoga-with-oga-logo-320.png?alt=media&token=edb09175-1e90-4633-adc1-5717bdf947fd',
          }}
          accessibilityLabel="Yoga with Oga Logo"
          sx={{
            width: 128,
            height: 128,
            alignSelf: 'center',
            mb: '24px',
          }}
        />
        <View sx={{ height: 16 }} />
        <Text sx={{ color: '$green' }}>Welcome to Yoga with Oga</Text>
        <Text variant={'small'} sx={{ color: '$greenLight' }}>
          Create an account to access yoga sessions, meditations and more
        </Text>
        <View sx={{ height: 16 }} />
        <Input
          lable='Username*'
          value={state.userName.value}
          onChange={(text) => dispatch({ type: 'uNameChange', value: text })}
          placeholder="Username*"
          style={{ borderColor: state.userNameBC }}
        />
        <View sx={{ height: 14 }} />
        <Input
          lable='Firstname*'
          value={state.firstName.value}
          onChange={(text) => dispatch({ type: 'fNameChange', value: text })}
          placeholder="Firstname*"
          style={{ borderColor: state.firstNameBC }}
        />
        <View sx={{ height: 14 }} />
        <Input
          lable='Email*'
          value={state.mail.value}
          onChange={(text) => dispatch({ type: 'mailChange', value: text })}
          placeholder="Email address*"
          style={{ borderColor: state.mailBC }}
        />
        <View sx={{ height: 14 }} />
        <Input
          lable='Password*'
          value={state.password.value}
          onChange={(text) => dispatch({ type: 'passwordChange', value: text })}
          placeholder="Password*"
          type="password"
          style={{ borderColor: state.passwordBC }}
          secureTextEntry={true}
        />

        <View sx={{ height: 16 }} />
        <Text variant={'extraSmall'} sx={{ color: '$grey45' }}>
          By signing up, you’re agree to our Terms and Conditions and Privacy
          Policy
        </Text>
        <View sx={{ height: 24 }} />

        <Button onClick={onClickContinue}>Continue</Button>
        <View sx={{ height: 14 }} />
        <Button variant={'text'} onClick={() => router.push('/auth/signIn')}>
          Sign In
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}
