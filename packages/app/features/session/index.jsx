import React from 'react'
import { H3, H5, ScrollView, Text, View } from 'dripsy'
import { SafeAreaView, useWindowDimensions } from 'react-native'
import { Link } from 'solito/link'
import { Banner } from '../components/session'
import { ListItem } from '../components/session/listItem'
import { BottomNavigation } from '../components/bottomNavigation'
import { LoadingScreen } from '../components/loadingScreen'
import { IconButton } from '../components/iconButton'
import { ArrowLeft } from 'react-native-feather'
import { useRouter } from 'solito/router'

export function SessionScreen({ sessionId, session = {} }) {
  const { height } = useWindowDimensions()
  const router = useRouter()

  if (Object.keys(session).length === 0) {
    return <LoadingScreen />
  }

  return (
    <SafeAreaView sx={{ flex: 1 }}>
      <ScrollView sx={{ height: height - 80 }}>
        <Banner
          imageUrl={session.imageUrl}
          title={session.title}
          subtitle={session.subtitle}
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
          <View>
            {session &&
              session.videos &&
              session.videos.map((item) => (
                <Link
                  key={item.title}
                  href={`/session/${sessionId}/${item.id}`}
                >
                  <ListItem
                    imageUrl={item.thumbnail}
                    title={item.title}
                    style={{ my: 16 }}
                  />
                </Link>
              ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavigation isActive height={height} />
      <IconButton onPress={() => router.push(`/`)} style={{ left: 16 }}>
        <ArrowLeft />
      </IconButton>
    </SafeAreaView>
  )
}
