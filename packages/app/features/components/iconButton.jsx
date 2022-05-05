import React from 'react'
import { Pressable } from 'dripsy'

export const IconButton = ({ children, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      sx={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        position: 'fixed',
        right: 16,
        top: 16,
        borderRadius: '50%',
        color: '$green',
        ...style,
      }}
    >
      {children}
    </Pressable>
  )
}
