import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { SignUp } from '../../features/auth/signUp'
import { SignIn } from '../../features/auth/singIn'
import { useUser } from '../../provider/userContext'

import { auth } from '../../firebase-config'

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
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
          component={SignUp}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{
            title: 'Sign In',
          }}
        />
      </Stack.Navigator>
    </>
  )
}
