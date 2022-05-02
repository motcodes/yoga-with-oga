import { Box, Flex, H3, H4, H5, Text, View } from 'dripsy'
import React from 'react'
import { Button } from './button'

export const Modal = ({
  title = '',
  copy = '',
  leftButtonText = 'Yes',
  leftButtonClick,
  rightButtonText = 'No',
  rightButtonClick,
  ...rest
}) => {
  return (
    <Flex
      {...rest}
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 20,
        px: 20,
        width: 256,
        height: 'auto',
        textAlign: 'center',
        borderRadius: 8,
        boxShadow: 'modal',
        backgroundColor: '$white',
      }}
    >
      <H5 sx={{ mb: 16 }}>{title}</H5>
      <Text sx={{ mb: 16 }}>{copy}</Text>
      <Flex sx={{ width: '100%' }}>
        <Button
          style={{ flex: 1, width: '100%' }}
          variant="outlined"
          onClick={leftButtonClick}
        >
          {leftButtonText}
        </Button>
        <View sx={{ width: 8 }} />
        <Button
          style={{ flex: 1, width: '100%' }}
          variant="filled"
          onClick={rightButtonClick}
        >
          {rightButtonText}
        </Button>
      </Flex>
    </Flex>
  )
}
