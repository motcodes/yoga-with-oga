import React, { useEffect, useRef, useState } from 'react'
import { View } from 'dripsy'
import { Video, AVPlaybackStatus } from 'expo-av'
import { Button } from './button'
import { useWindowDimensions } from 'react-native'

export function VideoPlayer({ videoUrl, thumbnail }) {
  const video = useRef(null)
  const [status, setStatus] = useState({})
  const windowSize = useWindowDimensions()

  useEffect(() => {
    if (video.current) {
      video.current.playAsync()
    }
  }, [video.current])

  return (
    <View sx={{ height: windowSize.height, width: '100%' }}>
      <Video
        ref={video}
        style={{
          height: windowSize.height,
          width: 'auto',
          maxWidth: 512,
          marginHorizontal: 'auto',
        }}
        source={{
          uri: videoUrl,
        }}
        isMuted
        usePoster
        posterSource={{ uri: thumbnail }}
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          onClick={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          {status.isPlaying ? 'Pause' : 'Play'}
        </Button>
      </View>
    </View>
  )
}
