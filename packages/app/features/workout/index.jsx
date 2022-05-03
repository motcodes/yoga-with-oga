import React from 'react'
import { useWorkout } from 'app/helper'
import { Text, View } from 'dripsy'
import { SafeAreaView } from 'react-native'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { Button } from '../components/button'
import { VideoPlayer } from '../components/videoPlayer'

const { useParam } = createParam()
export function SessionWorkoutScreen() {
  const [sessionId] = useParam('sessionId')
  const [workoutId] = useParam('workoutId')
  const router = useRouter()

  const workout = useWorkout(workoutId)
  console.log('workout :', workout)

  if (!workout) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      {workout && (
        <VideoPlayer
          videoUrl={workout.videoUrl}
          thumbnail={workout.thumbnailUrl}
        />
      )}
      <View sx={{ position: 'absolute', top: 32, left: 16 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => router.push(`/session/${sessionId}`)}
        >
          Back
        </Button>
      </View>
    </SafeAreaView>
  )
}