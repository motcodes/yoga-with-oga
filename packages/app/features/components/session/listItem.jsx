import { Box, Flex, H3, Image, Text, View } from 'dripsy'
import React from 'react'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1567281150864-5296ada11f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

export const ListItem = ({
  imageUrl = DEFAULT_IMAGE,
  title = 'Pose #1',
  style,
}) => {
  return (
    <Flex
      sx={{
        height: 88,
        width: '100%',
        maxWidth: '100%',
        ...style,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        alt={title}
        resizeMode="cover"
        sx={{ borderRadius: 6, height: '100%', width: '40%', maxWidth: 204 }}
      />
      <View sx={{ width: 20 }} />
      <Flex sx={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Text as={H3} sx={{ color: '$green', lineHeight: '150%' }}>
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}
