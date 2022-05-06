import React from 'react'
import { View } from 'dripsy'
import { Button } from './button'
import { useWindowDimensions } from 'react-native'

export const FloatingButton = ({ onClick, style, children }) => {
  const { width } = useWindowDimensions()
  return (
    <View
      sx={{
        position: 'absolute',
        bottom: 112,
        left: '50%',
        transform: [{ translateX: '-50%' }],
        width: width * 0.9,
        height: 46,
        borderRadius: 6,
        boxShadow: 'md',
        ...style,
      }}
    >
      <Button onClick={onClick}>{children}</Button>
    </View>
  )
}
