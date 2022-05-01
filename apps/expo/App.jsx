import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { useState } from 'react'

const fetchFonts = () =>
  Font.loadAsync({
    'GeneralSans-Medium': require('./assets/fonts/GeneralSans-Medium.ttf'),
  })

export default function App() {
  const [isLoaded, setLoading] = useState(false)

  if (!isLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(true)} />
    )
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
