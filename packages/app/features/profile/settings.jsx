import { SafeAreaView, Text, View } from 'dripsy'
import { useUser } from '../../provider/userContext'
import { useRouter } from 'solito/router'
import { Link } from 'solito/link'
import { auth } from '../../firebase/client'
import { SettingsListItem } from '../components/settingsListItem'
import { useEffect } from 'react'
import { Pressable as NativeButton } from 'react-native'
import { BottomNavigation } from '../components/bottomNavigation'

export const SettingsScreen = () => {
  const { user, setUser } = useUser()
  const { push } = useRouter()

  useEffect(() => {
    if (!user) {
      push('/')
    }
  }, [user])

  return (
    <>
      <SafeAreaView>
        <View
          sx={{
            mx: 16,
            alignItems: 'center',
          }}
        >
          <View sx={{ height: 58 }} />
          <Text variant={'h4'} sx={{ color: '$greenDark' }}>
            Settings
          </Text>
          <View sx={{ height: 62 }} />
        </View>

        <Link href={'/profile/editProfile'}>
          <SettingsListItem title="Edit Profile" />
        </Link>

        <SettingsListItem title="Contact Us" />
        <SettingsListItem title="Imprint" />

        <NativeButton
          onPress={() => {
            auth.signOut()
            setUser(undefined)
          }}
        >
          <SettingsListItem title="Logout" />
        </NativeButton>
      </SafeAreaView>
      <View sx={{ height: 48 }} />
      <BottomNavigation isRightActive />
    </>
  )
}
