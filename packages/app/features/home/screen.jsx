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
  H2,
} from 'dripsy'
import React from 'react'
import { Banner } from '../components/session'
import { Link } from 'solito/link'
import { BottomNavigation } from '../components/bottomNavigation'
import { useWindowDimensions } from 'react-native'
import { LoadingScreen } from '../components/loadingScreen'

export function HomeScreen({ sessions, user }) {
  const { height } = useWindowDimensions()

  if (Object.keys(sessions).length === 0) {
    return <LoadingScreen />
  }

  return (
    <SafeAreaView sx={{ flex: 1 }}>
      <ScrollView
        sx={{
          display: 'flex',
          height: height - 80,
        }}
      >
        <Flex
          sx={{
            pt: 32,
            pb: 48,
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
              width: 80,
              height: 80,
              alignSelf: 'center',
              mb: '24px',
            }}
          />
          <H4 as={H1} sx={{ color: '$green', mb: '4px' }}>
            Get ready for some Yoga{user && <span>, {user.firstName}</span>}!
          </H4>
          <Text sx={{ color: '$yellow' }}>Only the best Sessions for you:</Text>
        </Flex>
        <View id="session-list">
          {sessions &&
            sessions.map((item, index) => (
              <View key={item.title}>
                {index === 0 && (
                  <H5 as={H2} sx={{ px: 16, pb: '20px', color: '$greenDark' }}>
                    Personalized Oga workout
                  </H5>
                )}
                <Link href={`/session/${item.id}`}>
                  <Banner
                    title={item.title}
                    subtitle={item.subtitle}
                    imageUrl={item.imageUrl}
                    highlight={index === 0 ? 'Feature' : ' '}
                  />
                </Link>
                <Box sx={{ height: 64 }} />
                {index === 0 && (
                  <>
                    <H5
                      as={H3}
                      sx={{
                        px: 16,
                        mt: '0px',
                        mb: '20px',
                        color: '$greenDark',
                      }}
                    >
                      More Yoga Flows
                    </H5>
                  </>
                )}
              </View>
            ))}
        </View>
        <View sx={{ px: 16, pt: 24, pb: 128 }}>
          <H5 sx={{ color: '$greenLight' }}>
            more Sessions are comming soon...
          </H5>
        </View>
      </ScrollView>
      <BottomNavigation isActive height={height} />
    </SafeAreaView>
  )
}
