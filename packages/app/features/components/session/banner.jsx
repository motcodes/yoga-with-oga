import { Box, Container, H1, H2, H3, H4, H5, Text, useSx } from 'dripsy'
import React from 'react'
import { Image, ImageBackground } from 'react-native'

export function Banner({ imageUrl, title, subtitle, highlight = '' }) {
  const sx = useSx()
  return (
    <Box
      sx={{
        width: '100%',
        height: 320,
      }}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        alt={title}
        resizeMode="cover"
        style={sx({
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        })}
      >
        <svg
          viewBox="0 0 375 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <path
            d="M383 138.5C383 120.312 377.943 102.302 368.118 85.4983C358.294 68.6947 343.893 53.4266 325.739 40.5657C307.586 27.7048 286.034 17.503 262.315 10.5427C238.595 3.58241 213.173 -7.95026e-07 187.5 0C161.827 7.95026e-07 136.405 3.58241 112.685 10.5427C88.9662 17.503 67.4145 27.7048 49.2606 40.5657C31.1068 53.4266 16.7063 68.6948 6.88155 85.4984C-2.94325 102.302 -8 120.312 -8 138.5L187.5 138.5H383Z"
            fill="#F2F7F5"
          />
        </svg>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 20,
            zIndex: 2,
          }}
        >
          <Text sx={{ color: '$green' }}>{'Featured'}</Text>
          <H4 as={H1} sx={{ color: '$greenDark' }}>
            {title}
          </H4>
          <Text variant="small" sx={{ color: '$greenLight' }}>
            {subtitle}
          </Text>
        </Box>
      </ImageBackground>
    </Box>
  )
}