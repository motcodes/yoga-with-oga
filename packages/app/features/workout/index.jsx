import React, { useState } from 'react'
import { useWorkout } from 'app/helper'
import { H3, H5, Pressable, ScrollView, Text, View } from 'dripsy'
import { SafeAreaView, useWindowDimensions } from 'react-native'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { Banner } from '../components/session'
import { ListItem } from '../components/session/listItem'
import { ImageModal } from '../components/imageModal'
import { Button } from '../components/button'

const { useParam } = createParam()
export function SessionWorkoutScreen() {
  const [sessionId] = useParam('sessionId')
  const [workoutId] = useParam('workoutId')
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState({})
  const windowSizes = useWindowDimensions()
  const workout = useWorkout(workoutId)
  // console.log('workout :', workout)

  if (!workout) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Banner
          imageUrl={workout.thumbnail}
          title={workout.title}
          subtitle={workout.description}
          highlight=" "
        />

        <View
          sx={{
            px: 16,
            my: 80,
          }}
        >
          <H5 as={H3} sx={{ color: '$green' }}>
            Workout Overview
          </H5>
          {workout &&
            workout.poses &&
            workout.poses.map((item) => (
              <Pressable
                key={item.title}
                onPress={() => {
                  setModalData(item)
                  setModalVisible(true)
                }}
              >
                <ListItem
                  imageUrl={item.imageUrlSmall}
                  title={item.title}
                  style={{ my: 16 }}
                />
              </Pressable>
            ))}
        </View>
      </ScrollView>
      <View
        sx={{
          position: 'fixed',
          bottom: 112,
          // px: 16,
          // marginX: 'auto',
          left: '50%',
          transform: 'translateX(-50%)',
          width: windowSizes.width * 0.9,
          boxShadow: 'md',
        }}
      >
        <Button
          hasShadow
          onClick={() =>
            router.replace(
              `/session/${sessionId}/${workoutId}/${workout.videoId}`
            )
          }
        >
          Start
        </Button>
      </View>
      <ImageModal
        modalData={modalData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  )
}
