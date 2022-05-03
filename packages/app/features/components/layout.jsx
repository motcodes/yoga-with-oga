import { View } from 'dripsy'
import React from 'react'
import { useUser } from '../../provider/userContext'

export function Layout({ children }) {
  return (
    <View
      sx={{
        backgroundColor: '$white',
        minHeight: '100%',
      }}
    >
      {children}
    </View>
  )
}
