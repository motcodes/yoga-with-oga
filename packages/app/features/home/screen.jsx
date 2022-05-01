import { Text, useSx, View, H1, P, Row, A, H2 } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1>Welcome to Yoga with Oga</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          A funny turn on a yoga app for beginners from beginners. You can
          choose from multiple sessions to fit your personal preference. Oga
          (motcodes) will perform in the yoga clips, so a beginner can learn and
          progress with him.
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/motcodes"
          textProps={{
            style: sx({ fontSize: 16, color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <TextLink
          href="/front-end"
          textProps={{
            style: sx({ fontSize: 16, color: 'blue' }),
          }}
        >
          Front-End
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user/motcodes"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text selectable={false} sx={{ fontSize: 16, color: 'yellow' }}>
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}
