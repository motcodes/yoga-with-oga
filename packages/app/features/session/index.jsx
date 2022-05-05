import React from 'react'
import { H3, H5, ScrollView, Text, View } from 'dripsy'
import { SafeAreaView } from 'react-native'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { useSession } from 'app/helper'
import { Banner } from '../components/session'
import { ListItem } from '../components/session/listItem'

const { useParam } = createParam()
export function SessionScreen() {
  const [sessionId] = useParam('sessionId')

  const session = useSession(sessionId)
  console.log('session :', session)

  if (!session) {
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
          {session &&
            session.videos &&
            session.videos.map((item) => (
              <Link key={item.title} href={`/session/${sessionId}/${item.id}`}>
                <ListItem
                  imageUrl={item.thumbnail}
                  title={item.title}
                  style={{ my: 16 }}
                />
              </Link>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
