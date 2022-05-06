import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { SessionScreen } from '../../features/session'
import { SessionWorkoutScreen } from '../../features/workout'
import { SignUp } from '../../features/auth/signUp'
import { SignIn } from '../../features/auth/singIn'
import { PersonalInfo } from '../../features/auth/personalInfo'
import { ProfileScreen } from '../../features/profile'
import { SettingsScreen } from '../../features/profile/settings'
import { EditProfile } from '../../features/profile/editProfile'
import { ContactUs } from '../../features/contactUs/contactUs'
import { Imprint } from '../../features/imprint/imprint'

import { SessionWorkoutVideoScreen } from 'app/features/video'
import { SessionWorkoutVideoSummaryScreen } from 'app/features/video/summary'

import { SessionWorkoutRoute } from 'app/routes'

const Stack = createNativeStackNavigator()
const VideoStack = createNativeStackNavigator()

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
        name="session"
        component={SessionScreen}
        options={{
          title: 'Session',
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="session-workout"
        component={SessionWorkoutRoute}
        options={{
          title: 'Workout',
          headerShown: false,
        }}
      />
      <VideoStack.Navigator initialRouteName="session-workout-video">
        <VideoStack.Screen
          name="session-workout-video"
          component={SessionWorkoutVideoScreen}
          options={{
            title: 'Workout Video',
            headerShown: false,
          }}
        />
        <VideoStack.Screen
          name="session-workout-video-summary"
          component={SessionWorkoutVideoSummaryScreen}
          options={{
            title: 'Workout Summary',
            headerShown: false,
          }}
        />
      </VideoStack.Navigator>
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
        name="contactUs"
        component={ContactUs}
        options={{
          title: 'Cotact Us',
        }}
      />
      <Stack.Screen
        name="imprint"
        component={Imprint}
        options={{
          title: 'Imprint',
        }}
      />
    </Stack.Navigator>
  )
}
