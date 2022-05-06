import React, { useState } from 'react'
import { H3, H5, Pressable, ScrollView, Text, View } from 'dripsy'
import { SafeAreaView, useWindowDimensions } from 'react-native'
import { useRouter } from 'solito/router'
import { Banner } from '../components/session'
import { ListItem } from '../components/session/listItem'
import { ImageModal } from '../components/imageModal'
import { FloatingButton } from '../components/floatingButton'
import { BottomNavigation } from '../components/bottomNavigation'
import { LoadingScreen } from '../components/loadingScreen'
import { IconButton } from '../components/iconButton'
import { ArrowLeft } from 'react-native-feather'

export function SessionWorkoutScreen({ sessionId, workoutId, workout = {} }) {
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState({})
  const { height } = useWindowDimensions()

  if (Object.keys(workout).length === 0) {
    return <LoadingScreen />
  }

  return (
    <SafeAreaView sx={{ flex: 1 }}>
      <ScrollView sx={{ height: height - 80 }}>
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
          <View>
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
        </View>
      </ScrollView>
      <FloatingButton
        onClick={() =>
          router.push(`/session/${sessionId}/${workoutId}/${workout.videoId}`)
        }
        style={{ top: height - 160 }}
      >
        Start
      </FloatingButton>
      <ImageModal
        modalData={modalData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <IconButton
        style={{ left: 16 }}
        onPress={() => router.push(`/session/${sessionId}`)}
      >
        <ArrowLeft />
      </IconButton>
      <BottomNavigation isActive height={height} />
    </SafeAreaView>
  )
}
