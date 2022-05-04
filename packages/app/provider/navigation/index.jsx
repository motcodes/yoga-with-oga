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
              'user-detail': 'user/:id',
              'signUp': 'auth/signUp',
              'signIn': 'auth/signIn',
              'personalInfo': 'auth/personalInfo'
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
