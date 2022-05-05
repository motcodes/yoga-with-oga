import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { SessionScreen } from '../../features/session'
import { SessionWorkoutScreen } from '../../features/workout'
import { SignUp } from '../../features/auth/signUp'
import { SignIn } from '../../features/auth/singIn'
import { PersonalInfo } from '../../features/auth/personalInfo'
import { ProfileScreen } from '../../features/profile'
import { SettingsScreen } from '../../features/profile/settings'
import { EditProfile } from '../../features/profile/editProfile'
import { useUser } from '../../provider/userContext'

import { auth } from '../../firebase/client'
import { SessionWorkoutVideoScreen } from 'app/features/video'

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="session"
        component={SessionScreen}
        options={{
          title: 'Session',
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="session-workout"
        component={SessionWorkoutScreen}
        options={{
          title: 'Workout',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="session-workout-video"
        component={SessionWorkoutVideoScreen}
        options={{
          title: 'Workout Video',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="personalInfo"
        component={PersonalInfo}
        options={{
          title: 'Personal Info',
        }}
      />
      <Stack.Screen
        name="personalInfo"
        component={PersonalInfo}
        options={{
          title: 'Personal Info',
        }}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
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
      <Stack.Screen
        name="personalInfo"
        component={PersonalInfo}
        options={{
          title: 'Personal Info',
        }}
      />
    </Stack.Navigator>
  )
}
