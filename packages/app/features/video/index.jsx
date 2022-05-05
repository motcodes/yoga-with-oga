import React from 'react'
import { useParam, useWorkoutVideo } from 'app/helper'
import { Text, View } from 'dripsy'
import { SafeAreaView } from 'react-native'
import { VideoPlayer } from '../components/videoPlayer'

export function SessionWorkoutVideoScreen() {
  const [sessionId] = useParam('sessionId')
  const [workoutId] = useParam('workoutId')

  const workoutVideo = useWorkoutVideo(workoutId)

  if (!workoutVideo) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      {workoutVideo && workoutVideo.timestamps && (
        <VideoPlayer
          data={workoutVideo}
          sessionId={sessionId}
          workoutId={workoutId}
          firstCycle={workoutVideo.timestamps[1] * 1000}
        />
      )}
    </SafeAreaView>
  )
}
