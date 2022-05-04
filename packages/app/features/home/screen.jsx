import {
  View,
  H1,
  ScrollView,
  SafeAreaView,
  Image,
  Box,
  H3,
  H4,
  Flex,
  H5,
  Text,
} from 'dripsy'
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
        <Flex
          sx={{
            pt: 24,
            pb: 32,
            px: 16,
            flexDirection: 'column',
          }}
        >
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/yoga-with-oga.appspot.com/o/yoga-with-oga-logo-320.png?alt=media&token=edb09175-1e90-4633-adc1-5717bdf947fd',
            }}
            accessibilityLabel="Yoga with Oga Logo"
            sx={{
              width: 64,
              height: 64,
              alignSelf: 'center',
              mb: '12px',
            }}
          />
          <H4 as={H1} sx={{ color: '$green', mb: '8px' }}>
            Get ready for some Yoga{user && <span>, {user.firstName}</span>}!
          </H4>
          <Text sx={{ color: '$greenLight' }}>
            Only the best Sessions from Oga for you:
          </Text>
        </Flex>
        {sessions &&
          sessions.map((item, index) => (
            <React.Fragment key={item.title}>
              <Link href={`/session/${item.id}`}>
                <Banner
                  title={item.title}
                  subtitle={item.subtitle}
                  imageUrl={item.imageUrl}
                  highlight={index === 0 ? 'Feature' : ' '}
                />
              </Link>
              <Box sx={{ height: 48 }} />
            </React.Fragment>
          ))}
        <View sx={{ px: 16, pt: 24, pb: 96 }}>
          <H5 sx={{ color: '$greenLight' }}>
            more Sessions are comming soon...
          </H5>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
