import { Text, View } from 'dripsy'
import React from 'react'

export const LoadingScreen = () => {
  return (
    <View sx={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Loading...</Text>
    </View>
  )
}
