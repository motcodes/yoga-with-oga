import {
  Text,
  useSx,
  View,
  H1,
  P,
  Row,
  A,
  H2,
  Flex,
  ScrollView,
  SafeAreaView,
} from 'dripsy'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'app/firebase/client'
import { Banner } from '../components/session'
import { Link } from 'solito/link'
import { useSessions } from 'app/helper'

import { ListItem } from '../components/session/listItem'
import { TextLink } from 'solito/link'
import { BottomNavigation } from '../components/bottomNavigation'

export function HomeScreen() {
  const [textInput, setTextInput] = useState('')
  const sx = useSx()
  const sessions = useSessions()
  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
        }}
      >
        <H1>Welcome to Yoga with Oga</H1>
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
