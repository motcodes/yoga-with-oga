import React, { useEffect, useState } from 'react'
import { useParam, useSession, useWorkout } from 'app/helper'
import { H1, H2, H3, H4, H5, ScrollView, Text, View } from 'dripsy'
import { SafeAreaView, useWindowDimensions } from 'react-native'
import { useRouter } from 'solito/router'
import { ArrowLeft, X } from 'react-native-feather'
import { IconButton } from '../components/iconButton'
import { ListItem } from '../components/session/listItem'
import { FloatingButton } from '../components/floatingButton'
import { LoadingScreen } from '../components/loadingScreen'
import { useUser } from 'app/provider/userContext'
import { addPastSession } from 'app/helper/pastSessions'

export function SessionWorkoutVideoSummaryScreen() {
  const [sessionId] = useParam('sessionId')
  const [workoutId] = useParam('workoutId')
  const [videoId] = useParam('videoId')
  const router = useRouter()
  const workout = useWorkout(workoutId)
  const { videos } = useSession(sessionId)
  const { user, setUser } = useUser()
  const { height } = useWindowDimensions()

  const [workoutIndex, setWorkoutIndex] = useState()

  useEffect(() => {
    if (workout && videos) {
      setWorkoutIndex(videos.findIndex((item) => item.title === workout.title))
    }
  }, [workout, videos])

  if (Object.keys(workout).length === 0) {
    return <LoadingScreen />
  }

  return (
    <SafeAreaView sx={{ flex: 1 }}>
      <ScrollView sx={{ mb: 80, height: height, pb: 128 }}>
        <View sx={{ pt: 80, pb: 32, px: 20 }}>
          <Text as={H2} sx={{ color: '$yellow', lineHeight: 16 * 1.5 }}>
            Great Session! You completed:
          </Text>
          {workout && (
            <H4 as={H1} sx={{ color: '$green' }}>
              {workout.title}
            </H4>
          )}
        </View>
        <View sx={{ mt: 32, px: 20 }}>
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
      <IconButton
        style={{ left: 16 }}
        onPress={() =>
          router.replace(`/session/${sessionId}/${workoutId}/${videoId}`)
        }
      >
        <ArrowLeft />
      </IconButton>

      {videos && workout && workoutIndex + 1 === videos.length ? (
        <FloatingButton
          onClick={() => {
            addPastSession(sessionId, user, setUser)
            router.push(`/`)
          }}
          style={{ top: height - 112 }}
        >
          Finish this Session
        </FloatingButton>
      ) : (
        <FloatingButton
          onClick={() =>
            router.push(`/session/${sessionId}/${videos[workoutIndex + 1].id}`)
          }
          style={{ top: height - 112 }}
        >
          Next Workout
        </FloatingButton>
      )}
    </SafeAreaView>
  )
}
