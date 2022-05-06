import { SafeAreaView, Text, View } from 'dripsy'
import { useUser } from '../../provider/userContext'
import { useRouter } from 'solito/router'
import { Link } from 'solito/link'
import { auth } from '../../firebase/client'
import { SettingsListItem } from '../components/settingsListItem'
import { useEffect } from 'react'
import { Pressable as NativeButton, useWindowDimensions } from 'react-native'
import { BottomNavigation } from '../components/bottomNavigation'

export const SettingsScreen = () => {
  const { user, setUser } = useUser()
  const { push } = useRouter()
  const { height } = useWindowDimensions()

  useEffect(() => {
    if (!user) {
      push('/')
    }
  }, [user])

  return (
    <>
      <SafeAreaView
        sx={{
          flex: 1,
        }}
      >
        <View sx={{
          height: height-80
        }}>
        <View
          sx={{
            mx: 16,
            alignItems: 'center'
          }}>
            <View
              sx={{
                height: 58,
                flexGrow: 0,
              }}
            />
            <Text variant={'h4'} sx={{ color: '$greenDark' }}>
              Settings
            </Text>
            <View sx={{ height: 62 }} />
          </View>

          <Link href={'/profile/editProfile'}>
            <SettingsListItem title="Edit Profile" />
          </Link>

          <Link href={'/contactUs'}>
            <SettingsListItem title="Contact Us" />
          </Link>

          <Link href={'/imprint'}>
            <SettingsListItem title="Imprint" />
          </Link>

          <NativeButton
            onPress={() => {
              auth.signOut()
              setUser(undefined)
            }}
          >
            <SettingsListItem title="Logout" />
          </NativeButton>
        </View>
        <BottomNavigation isRightActive height={height} />
      </SafeAreaView>
    </>
  )
}
