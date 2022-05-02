import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import * as Font from 'expo-font'
import { AppLoading } from 'expo-app-loading'
import { useState } from 'react'

// const fetchFonts = () =>
//   Font.loadAsync({
//     'GeneralSans-Medium': require('./assets/fonts/GeneralSans-Medium.ttf'),
//   })

export default function App() {
  const [loaded] = Font.useFonts({
    'GeneralSans-Medium': require('./assets/fonts/GeneralSans-Medium.ttf'),
    'GeneralSans-Regular': require('./assets/fonts/GeneralSans-Regular.ttf'),
    'General Sans': require('./assets/fonts/GeneralSans-Regular.ttf'),
    'GeneralSans-Bold': require('./assets/fonts/GeneralSans-Bold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
  // return (
  //   <Provider>
  //     <NativeNavigation />
  //   </Provider>
  // )
}
