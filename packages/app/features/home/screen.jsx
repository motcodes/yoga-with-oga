import { View, H1, ScrollView, SafeAreaView } from 'dripsy'
import React from 'react'
import { Banner } from '../components/session'
import { Link } from 'solito/link'
import { useSessions } from 'app/helper'
import { useUser } from 'app/provider/userContext'

export function HomeScreen() {
  const { user } = useUser()
  const sessions = useSessions()
  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
        }}
      >
        <H1>
          Welcome to Yoga with Oga{user && <span>, {user.firstName}</span>}
        </H1>
        <View sx={{ height: 32 }} />
        {sessions &&
          sessions.map((item) => (
            <Link href={`/session/${item.id}`} key={item.title}>
              <Banner
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                highlight="test"
              />
            </Link>
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}
