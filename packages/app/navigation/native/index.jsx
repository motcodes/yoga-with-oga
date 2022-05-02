import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { SignUp } from '../../features/auth/signUp'
import { useState } from 'react'

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
  const [user, setUser] = useState()

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="user-detail"
          component={UserDetailScreen}
          options={{
            title: 'User',
          }}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp(user = user, setUser = setUser)}
          options={{
            title: 'Sign Up',
          }}
        />
      </Stack.Navigator>
    </>
  )
}
