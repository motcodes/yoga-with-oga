import { Text, View, ScrollView, SafeAreaView, Image } from 'dripsy'
import { useEffect, useState } from 'react'
import { useRouter } from 'solito/router'
import { doc, setDoc } from 'firebase/firestore'
import { TextLink } from 'solito/link'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { InputErrorToast } from '../components/inputErrorToast'
import { Logo } from '../components/logo'
import { usePersonalInfo } from '../../helper'

import { db } from '../../firebase/client'
import { useUser } from '../../provider/userContext'

export const PersonalInfo = () => {
  const router = useRouter()
  const { user } = useUser()
  const [state, dispatch] = usePersonalInfo()
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (state.gender.gotTargeted && state.gender.val === '') {
      dispatch({ type: 'genderBcChange' })
    }
    if (state.height.gotTargeted && state.height.val === '') {
      dispatch({ type: 'heightBcChange' })
    }
    if (state.weight.gotTargeted && state.weight.val === '') {
      dispatch({ type: 'weightBcChange' })
    }
  }, [state])

  const onClickLogIn = () => {
    if (state.gender.val && state.height.val && state.weight.val) {
      onPersonalInfoSubmit()
    } else {
      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false)
      }, 2000)
    }
  }

  const onPersonalInfoSubmit = async () => {
    try {
      await setDoc(doc(db, 'users', user.id), {
        userName: user.userName,
        firstName: user.firstName,
        gender: state.gender.val,
        height: state.height.val,
        weight: state.weight.val,
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

        <Text sx={{ color: '$green' }}>Almost ready</Text>
        <Text variant={'small'} sx={{ color: '$greenLight' }}>
          Just some more information about yourself, which helps us create a
          better experience.
        </Text>
        <View sx={{ height: 16 }} />
        <Input
          value={state.gender.val}
          onChange={(text) => dispatch({ type: 'genderChange', value: text })}
          placeholder="Gender"
          style={{ borderColor: state.genderBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={state.height.val}
          onChange={(text) => dispatch({ type: 'heightChange', value: text })}
          placeholder="Height"
          style={{ borderColor: state.heightBC }}
        />
        <View sx={{ height: 12 }} />
        <Input
          value={state.weight.val}
          onChange={(text) => dispatch({ type: 'weightChange', value: text })}
          placeholder="Weight"
          style={{ borderColor: state.weightBC }}
        />
        <View sx={{ height: 16 }} />
        <Text variant={'extraSmall'} sx={{ color: '$grey45' }}>
          By signing up, you're agree to our Terms and Conditions and Privacy
          Policy
        </Text>
        <View sx={{ height: 24 }} />

        <Button onClick={() => onClickLogIn()}>Sign Up</Button>
        <View sx={{ height: 12 }} />
        <Button variant={'text'} onClick={() => router.push('/')}>
          Skip for now
        </Button>
        <View sx={{ height: 12 }} />
      </ScrollView>
    </SafeAreaView>
  )
}
