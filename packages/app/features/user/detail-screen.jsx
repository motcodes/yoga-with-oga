import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { PoseElement } from "../components/pose";
import { BigButton } from "../components/bigButton";
import { SessionPageHeader } from "../components/sessionPageHeader";
import { SmallButton } from "../components/smallButton";

const { useParam } = createParam()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SmallButton iconName={'arrow-left.svg'}/>
      <SessionPageHeader imgName={'dex-ezekiel-We6cFKHo8sQ-unsplash1.png'} title={'The Tree'} time={'24 min'} />
      <PoseElement imgName='dex-ezekiel-We6cFKHo8sQ-unsplash1.png'/>
      <BigButton text={'Start'} />

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
