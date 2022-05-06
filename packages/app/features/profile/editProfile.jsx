import { Text, View, ScrollView, SafeAreaView, Flex } from 'dripsy'
import { useUser } from '../../provider/userContext'
import { useRouter } from 'solito/router'
import { auth } from '../../firebase/client'
import { SettingsListItem } from '../components/settingsListItem'
import { useEffect, useState } from 'react'
import { useEditProfile } from '../../helper/useEditProfile'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { InputErrorToast } from '../components/inputErrorToast'
import { onClickSave } from '../../helper/onClickSave'
import { BottomNavigation } from '../components/bottomNavigation'
import { useWindowDimensions } from 'react-native'

export const EditProfile = () => {
  const { user, setUser } = useUser()
  const { push } = useRouter()
  const [state, dispatch] = useEditProfile()
  const [modalVisible, setModalVisible] = useState(false)
  const [mail, setMail] = useState()
  const { height } = useWindowDimensions()

  useEffect(() => {
    if (!user) {
      push('/')
    } else {
      console.log(user)
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
    if (state.userName.gotTargeted && state.userName.val === '')
      dispatch({ type: 'userNameBcChange' })
    if (state.firstName.gotTargeted && state.firstName.val === '')
      dispatch({ type: 'firstNameBcChange' })
  }, [state])

  return (
    <>
      <SafeAreaView sx={{ flex: 1 }}>
        <ScrollView sx={{ height: height - 80 }}>
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
                onClickSave({ state, push, user, setUser, setModalVisible })
              }
            >
              Save
            </Button>
            <View sx={{ height: 64 }} />
          </Flex>
        </ScrollView>
      </SafeAreaView>
      <BottomNavigation isRightActive height={height} />
    </>
  )
}
