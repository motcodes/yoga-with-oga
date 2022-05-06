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
        position: 'absolute',
        right: 16,
        top: 16,
        borderRadius: 40 / 2,
        color: '$green',
        ...style,
      }}
    >
      {children}
    </Pressable>
  )
}
