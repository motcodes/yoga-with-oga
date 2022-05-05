import React from 'react'
import { useParam, useWorkout } from 'app/helper'
import { H1, H2, H3, H4, H5, Pressable, ScrollView, Text, View } from 'dripsy'
import { SafeAreaView } from 'react-native'
import { useRouter } from 'solito/router'
import { ArrowLeft, X } from 'react-native-feather'
import { IconButton } from '../components/iconButton'
import { ListItem } from '../components/session/listItem'
import { FloatingButton } from '../components/floatingButton'

export function SessionWorkoutVideoSummaryScreen() {
  const [sessionId] = useParam('sessionId')
  const [workoutId] = useParam('workoutId')
  const [videoId] = useParam('videoId')
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
      <ScrollView sx={{ px: 20, mb: 80 }}>
        <IconButton
          style={{ left: 16 }}
          onPress={() =>
            router.replace(`/session/${sessionId}/${workoutId}/${videoId}`)
          }
        >
          <ArrowLeft />
        </IconButton>
        <IconButton
          onPress={() =>
            video.current.playFromPositionAsync((duration - 10) * 1000)
          }
        >
          <X />
        </IconButton>
        <View sx={{ pt: 80, pb: 32 }}>
          <Text as={H2} sx={{ color: '$yellow', lineHeight: 16 * 1.5 }}>
            Great Session! You completed:
          </Text>
          {workout && (
            <H4 as={H1} sx={{ color: '$green' }}>
              {workout.title}
            </H4>
          )}
        </View>
        <View sx={{ mt: 32 }}>
          <H5 as={H3} sx={{ color: '$green' }}>
            Summary
          </H5>
          <View>
            {workout &&
              workout.poses &&
              workout.poses.map((item) => (
                <ListItem
                  key={item.title}
                  imageUrl={item.imageUrlSmall}
                  title={item.title}
                  style={{ my: 16 }}
                />
              ))}
          </View>
        </View>
      </ScrollView>
      {workout && workout.title === 'End Relaxation' ? (
        <FloatingButton onClick={() => router.push(`/`)} style={{ bottom: 64 }}>
          Finish this Session
        </FloatingButton>
      ) : (
        <FloatingButton
          onClick={() => router.push(`/session/${sessionId}`)}
          style={{ bottom: 64 }}
        >
          Next Workout
        </FloatingButton>
      )}
    </SafeAreaView>
  )
}
