import React, { useEffect, useRef, useState } from 'react'
import { View } from 'dripsy'
import { Video, AVPlaybackStatus } from 'expo-av'
import { Button } from './button'

export function VideoPlayer({ videoUrl }) {
  console.log('videoUrl :', videoUrl)
  const video = useRef(null)
  const [status, setStatus] = useState({})

  return (
    <View sx={{ height: 800, width: '100%' }}>
      <Video
        ref={video}
        style={{ height: 600, width: '100%' }}
        source={{
          uri: videoUrl,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
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
