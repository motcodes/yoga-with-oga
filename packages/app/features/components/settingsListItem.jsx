import { Box, Flex, H3, Image, Text, View } from 'dripsy'
import React from 'react'

export const SettingsListItem = ({
  title = 'Pose #1',
  info,
  style,
}) => {
  return (
    <>
        <View sx={{ height: 8 }} />
        <Flex sx={{
            height: 32,
            mx: 16,
            width: '90%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomStyle: 'solid',
            borderBottomColor: '$grey45',
            borderBottomWidth: 2,
            ...style,
        }}>
            <Text variant={'base'} sx={{ color: '$greenLight' }}>
                {title}
            </Text>
            <Text variant={'small'} sx={{
                color: '$grey45',
            }}>
                {info}
            </Text>
        </Flex>
    </>
  )
}
