import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({ children }) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              session: 'session/:sessionId',
              workout: 'session/:sessionId/:workoutId',
              video: 'session/:sessionId/:workoutId/:videoId',
              'video-summary': 'session/:sessionId/:workoutId/:videoId/summary',
              'front-end': 'front-end',
              signUp: 'auth/signUp',
              signIn: 'auth/signIn',
              personalInfo: 'auth/personalInfo',
              profile: 'profile',
              settings: 'profile/settings',
              editProfile: 'profile/editProfile',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
