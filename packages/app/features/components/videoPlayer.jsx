import React, { useEffect, useRef, useState } from 'react'
import { Pressable, View } from 'dripsy'
import { Video } from 'expo-av'
import { Button } from './button'
import { useWindowDimensions } from 'react-native'
import { ArrowLeft, Flag } from 'react-native-feather'
import { useRouter } from 'solito/router'
import { IconButton } from './iconButton'

export function VideoPlayer({ data, sessionId, workoutId, firstCycle }) {
  const { thumbnail, videoUrl, timestamps, duration, videoId } = data
  const video = useRef(null)
  const [status, setStatus] = useState({})
  const [nextCycle, setNextCycle] = useState(firstCycle)
  const windowSize = useWindowDimensions()
  const router = useRouter()

  useEffect(() => {
    if (video.current) {
      video.current.playAsync()
    }
  }, [video.current])

  useEffect(() => {
    if (status.didJustFinish) {
      console.log('finished')
      router.push(`/session/${sessionId}/${workoutId}/${videoId}/summary`)
    }
  }, [status.didJustFinish])

  const handleVideoClick = () => {
    if (nextCycle) {
      video.current.playFromPositionAsync(nextCycle)
      setNextCycle(timestamps[timestamps.indexOf(nextCycle / 1000) + 1] * 1000)
    } else {
      router.push(`/session/${sessionId}/${workoutId}/${videoId}/summary`)
    }
  }

  return (
    <View
      sx={{ height: windowSize.height, width: '100%', position: 'relative' }}
    >
      <Pressable onPress={handleVideoClick}>
        <Video
          ref={video}
          style={{
            height: 'auto',
            width: windowSize.width,
            maxWidth: 425,
            marginHorizontal: 'auto',
          }}
          source={{
            uri: videoUrl,
          }}
          isMuted
          usePoster
          posterSource={{ uri: thumbnail }}
          posterStyle={{
            height: 'auto',
            width: windowSize.width,
            maxWidth: 425,
            marginHorizontal: 'auto',
          }}
          rate={2}
          resizeMode="contain"
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </Pressable>
      <IconButton
        onPress={() => router.replace(`/session/${sessionId}/${workoutId}`)}
        style={{ left: 16 }}
      >
        <ArrowLeft />
      </IconButton>

      <View
        sx={{
          position: 'absolute',
          bottom: 0,
          width: windowSize.width,
          maxWidth: 425,
        }}
      >
        {timestamps && timestamps.length >=2 && (
          <BottomBar
            status={status}
            video={video}
            timestamps={timestamps}
            setNextCycle={setNextCycle}
          />
        )}
      </View>
    </View>
  )
}

const BottomBar = ({ status, video, timestamps, setNextCycle }) => {
  return (
    <View sx={{ backgroundColor: '$white', p: 16, width: '100%' }}>
      <Button
        onClick={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        {status.isPlaying ? 'Pause' : 'Play'}
      </Button>
      <View sx={{ flexDirection: 'row', width: '100%', mt: '16px' }}>
        {timestamps.map((item, index) => {
          return (
            <>
              <Pressable
                onPress={() => {
                  setNextCycle(timestamps[index + 1] * 1000)
                  video.current.playFromPositionAsync(item * 1000)
                }}
                sx={{
                  height: 20,
                  width: `100%`,
                  flex: 1,
                  backgroundColor:
                    status.positionMillis / 1000 > item
                      ? '$green'
                      : '$greenLighter',
                  borderRadius: 6,
                }}
              ></Pressable>
              {index !== timestamps.length - 1 && (
                <View sx={{ width: '8px' }} />
              )}
            </>
          )
        })}
      </View>
    </View>
  )
}
