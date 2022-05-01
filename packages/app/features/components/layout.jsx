import { View } from 'dripsy'
import React from 'react'

export function Layout({ children }) {
  return (
    <View
      sx={{
        backgroundColor: '$white',
        minHeight: '100vh',
      }}
    >
      {children}
    </View>
  )
}
