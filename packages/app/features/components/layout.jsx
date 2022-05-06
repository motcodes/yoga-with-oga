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
      <View sx={{ maxWidth: 425, width: '100%', mx: 'auto' }}>{children}</View>
    </View>
  )
}
