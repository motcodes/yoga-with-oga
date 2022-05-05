import { Text, View, ScrollView, SafeAreaView, Flex } from 'dripsy'
import { useUser } from '../../provider/userContext'
import { useRouter } from 'solito/router'
import { Link } from 'solito/link'
import { auth } from '../../firebase/client'
import { SettingsListItem } from '../components/settingsListItem'
import { useEffect, useState } from 'react'
import { useEditProfile } from '../../helper'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { InputErrorToast } from '../components/inputErrorToast'

import { db } from '../../firebase/client'
import { doc, setDoc } from 'firebase/firestore'
import { BottomNavigation } from '../components/bottomNavigation'

export const EditProfile = () => {
  const { user, setUser } = useUser()
  const { push } = useRouter()
  const [state, dispatch] = useEditProfile()
  const [modalVisible, setModalVisible] = useState(false)
  const [mail, setMail] = useState()

  useEffect(() => {
    if (!user) {
      push('/')
    } else {
      dispatch({ type: 'userNameChange', value: user.userName })
      dispatch({ type: 'firstNameChange', value: user.firstName })
      dispatch({
        type: 'genderChange',
        value: user.gender === '' ? undefined : user.gender,
      })
      dispatch({
        type: 'heightChange',
        value: user.height === '' ? undefined : user.height,
      })
      dispatch({
        type: 'weightChange',
        value: user.weight === '' ? undefined : user.weight,
      })

      if (auth) setMail(auth.currentUser.email)
    }
  }, [user, auth])

  useEffect(() => {
    if (state.userName.gotTargeted && state.userName.value === '')
      dispatch({ type: 'userNameBcChange' })
    if (state.firstName.gotTargeted && state.firstName.value === '')
      dispatch({ type: 'firstNameBcChange' })
  }, [state])

  const onClickSave = (
    userName,
    firstName,
    gender,
    height,
    weight,
    { push, user, setUser }
  ) => {
    if (userName && firstName) {
      onEditProfileSubmit(userName, firstName, gender, height, weight, {
        push,
        user,
        setUser,
      })
    } else {
      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false)
      }, 2000)
    }
  }

  const onEditProfileSubmit = async (
    userName,
    firstName,
    genderInput,
    heightInput,
    weightInput,
    { push, user, setUser }
  ) => {
    try {
      const { id, gender, height, weight, ...tmpUser } = user
      let data = { ...tmpUser, userName: userName, firstName: firstName }
      if (genderInput && genderInput !== '')
        data = { ...data, gender: genderInput }
      if (heightInput && heightInput !== '')
        data = { ...data, height: heightInput }
      if (weightInput && heightInput !== '')
        data = { ...data, weight: weightInput }

      await setDoc(doc(db, 'users', id), data)
      setUser({ ...data, id: id })

      push('/profile/settings')
    } catch (error) {
      console.log(error)

      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false)
      }, 2000)
    }
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <InputErrorToast modalVisible={modalVisible} />

          <View
            sx={{
              mx: 16,
              alignItems: 'center',
            }}
          >
            <View sx={{ height: 58 }} />
            <Text variant={'h4'} sx={{ color: '$greenDark' }}>
              Edit Profile
            </Text>
            <View sx={{ height: 62 }} />
          </View>

          <SettingsListItem title="Email" info={mail} />
          <View sx={{ height: 16 }} />

          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              mx: 16,
            }}
          >
            <Input
              value={state.userName.value}
              onChange={(text) =>
                dispatch({ type: 'userNameChange', value: text })
              }
              placeholder="User Name"
              style={{ borderColor: state.userNameBC }}
            />
            <View sx={{ height: 12 }} />
            <Input
              value={state.firstName.value}
              onChange={(text) =>
                dispatch({ type: 'firstNameChange', value: text })
              }
              placeholder="First Name"
              style={{ borderColor: state.firstNameBC }}
            />
            <View sx={{ height: 12 }} />
            <Input
              value={state.gender.value}
              onChange={(text) =>
                dispatch({ type: 'genderChange', value: text })
              }
              placeholder="Gender"
              style={{ borderColor: '$grey80' }}
            />
            <View sx={{ height: 12 }} />
            <Input
              value={state.height.value}
              onChange={(text) =>
                dispatch({ type: 'heightChange', value: text })
              }
              placeholder="Height"
              style={{ borderColor: '$grey80' }}
            />
            <View sx={{ height: 12 }} />
            <Input
              value={state.weight.value}
              onChange={(text) =>
                dispatch({ type: 'weightChange', value: text })
              }
              placeholder="Weight"
              style={{ borderColor: '$grey80' }}
            />

            <View sx={{ height: 24 }} />
            <Button
              onClick={() =>
                onClickSave(
                  state.userName.value,
                  state.firstName.value,
                  state.gender.value,
                  state.height.value,
                  state.weight.value,
                  { push, user, setUser }
                )
              }
            >
              Save
            </Button>
            <View sx={{ height: 64 }} />
          </Flex>
        </ScrollView>
      </SafeAreaView>
      <View sx={{ height: 48 }} />
      <BottomNavigation isRightActive />
    </>
  )
}
