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

// console.log('db :', db)
const sessionCol = collection(db, 'session')

export function HomeScreen() {
  const [textInput, setTextInput] = useState('')

  const [videos, setVideos] = useState([])
  console.log('videos :', videos)

  useEffect(() => {
    const fetchSession = async () => {
      const sessionsSnapshot = await getDocs(sessionCol)
      const sessions = sessionsSnapshot.docs.map((doc) => doc.data())
      setVideos(sessions)
    }
    fetchSession()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
          mx: 16,
        }}
      >
        <H1>Welcome to Yoga with Oga</H1>
        <View sx={{ height: 32 }} />
        {videos &&
          videos.map((item) => (
            <Link href={`/session/${item.slug}`}>
              <Banner
                key={item.title}
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
