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
              'user-detail': 'user/:id',
              'front-end': 'front-end',
              'signUp': 'auth/signUp',
              'signIn': 'auth/signIn',
              'personalInfo': 'auth/personalInfo',
              'profile': 'profile'
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
