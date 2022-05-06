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
import { useSessions } from 'app/helper'
import { useUser } from 'app/provider/userContext'
import { BottomNavigation } from '../components/bottomNavigation'

export function HomeScreen() {
  const { user } = useUser()
  const sessions = useSessions()
  return (
    <>
      <SafeAreaView>
        <ScrollView
          sx={{
            display: 'flex',
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
                width: 64,
                height: 64,
                alignSelf: 'center',
                mb: '24px',
              }}
            />
            <H4 as={H1} sx={{ color: '$green', mb: '10px' }}>
              Get ready for some Yoga{user && <span>, {user.firstName}</span>}!
            </H4>
            <Text sx={{ color: '$yellow' }}>
              Only the best Sessions for you:
            </Text>
          </Flex>
          {sessions &&
            sessions.map((item, index) => (
              <React.Fragment key={item.title}>
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
              </React.Fragment>
            ))}
          <View sx={{ px: 16, pt: 24, pb: 96 }}>
            <H5 sx={{ color: '$greenLight' }}>
              more Sessions are comming soon...
            </H5>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View sx={{ height: 48 }} />
      <BottomNavigation isActive />
    </>
  )
}
