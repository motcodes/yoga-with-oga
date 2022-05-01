import { View, Text } from 'dripsy'
import { TextLink } from 'solito/link'

export function FrontEndDetailScreen() {
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text sx={{ textAlign: 'center', mb: 16 }}>{`Front End`}</Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
