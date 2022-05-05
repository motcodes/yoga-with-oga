import { Text, View, ScrollView, SafeAreaView, Image } from 'dripsy'
import { useEffect, useState } from 'react'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useRouter } from 'solito/router'
import { InputErrorToast } from '../components/inputErrorToast'
import { useSignIn } from '../../helper'

import { auth, db } from '../../firebase/client'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useUser } from '../../provider/userContext'

export const SignIn = () => {
  const router = useRouter()
  const { user, setUser } = useUser()
  const [modalVisible, setModalVisible] = useState(false)
  const [state, dispatch] = useSignIn()

  useEffect(() => {
    if (user && user.id !== '') {
      router.push('/')
    }
  }, [user])

  useEffect(() => {
    if (state.mail.gotTargeted && state.mail.val === '') {
      dispatch({ type: 'mailBcChange' })
    }
    if (state.password.gotTargeted && state.password.val === '') {
      dispatch({ type: 'passwordBcChange' })
    }
  }, [state])

  const onClickContinue = () => {
    if (state.mail.value && state.password.val) {
      onSignUpSubmit()
    } else {
      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false)
      }, 2000)
    }
  }

  const onSignUpSubmit = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        state.mail.val,
        state.password.val
      )

      const uId = userCredentials.user.uid
      const userDoc = await getDoc(doc(db, 'users', uId))

      setUser({ ...userDoc.data(), id: uId })

      router.push('/')
    } catch (error) {
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

        <Text sx={{ color: '$green' }}>New to Yoga with Oga?</Text>
        <Text variant={'small'} sx={{ color: '$yellow' }}>
          Sign up for free
        </Text>
        <View sx={{ height: 16 }} />
        <Input
          value={state.mail.val}
          onChange={(text) => dispatch({ type: 'mailChange', value: text })}
          placeholder="Email address*"
          style={{ borderColor: state.mailBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={state.password.val}
          onChange={(text) => dispatch({ type: 'passwordChange', value: text })}
          placeholder="Password*"
          type="password"
          style={{ borderColor: state.passwordBC }}
          secureTextEntry={true}
        />
        <View sx={{ height: 24 }} />

        <Button onClick={onClickContinue}>Continue</Button>
        <View sx={{ height: 12 }} />
        <Button variant={'text'} onClick={() => router.push('/auth/signUp')}>
          Sign Up
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}
