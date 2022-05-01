import { Text, useSx, View, H1, P, Row, A, H2, Flex } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Banner } from '../components/session'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        p: 16,
      }}
    >
      <H1>Welcome to Yoga with Oga</H1>
      <Flex
        sx={{
          width: 375,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
        }}
      >
        <Input />
        <Button>Button</Button>
        <Banner
          imageUrl="https://images.unsplash.com/photo-1567281150864-5296ada11f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          title="Downward Facing Dog"
          subtitle="24min - Legs and Back"
          highlight="Featured"
        />
      </Flex>
      <Row>
        <MotiLink href="/user/motcodes">
          <Text selectable={false} sx={{ color: '$yellow' }}>
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}
