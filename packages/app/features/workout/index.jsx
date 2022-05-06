import React, { useState } from 'react'
import { H3, H5, Pressable, ScrollView, Text, View } from 'dripsy'
import { SafeAreaView } from 'react-native'
import { useRouter } from 'solito/router'
import { Banner } from '../components/session'
import { ListItem } from '../components/session/listItem'
import { ImageModal } from '../components/imageModal'
import { FloatingButton } from '../components/floatingButton'
import { BottomNavigation } from '../components/bottomNavigation'

export function SessionWorkoutScreen({ sessionId, workoutId, workout = {} }) {
  // console.log('workout :', workout)
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState({})

  if (Object.keys(workout).length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <>
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
              mb: '128px',
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
        <FloatingButton
          onClick={() =>
            router.push(`/session/${sessionId}/${workoutId}/${workout.videoId}`)
          }
        >
          Start
        </FloatingButton>
        <ImageModal
          modalData={modalData}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </SafeAreaView>
      <View sx={{ height: 48 }} />
      <BottomNavigation isActive />
    </>
  )
}
