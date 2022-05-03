import { useSession } from 'app/helper'
import { FlatList, H3, H4, H5, ScrollView, Text, View } from 'dripsy'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { createParam } from 'solito'
import { Banner } from '../components/session'
import { ListItem } from '../components/session/listItem'
import { VideoPlayer } from '../components/videoPlayer'

const { useParam } = createParam()
export function SessionScreen() {
  const [slug] = useParam('slug')

  const session = useSession(slug)
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
          <FlatList
            data={session.videos}
            renderItem={({ item }) => {
              console.log('item :', item)
              return (
                // <ListItem
                //   key={item.title}
                //   imageUrl={item.imageUrl}
                //   title={item.title}
                //   style={{ my: 16 }}
                // />
                <VideoPlayer key={item.title} videoUrl={item.vimeo.videoUrl} />
              )
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
