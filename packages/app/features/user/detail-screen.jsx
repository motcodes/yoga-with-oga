import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { PoseElement } from "../components/pose";
import { BigButton } from "../components/bigButton";
import { SessionPageHeader } from "../components/sessionPageHeader";
import { SmallButton } from "../components/smallButton";
import { PlayInfo } from "../components/playInfo";
import { FinishedSession } from "../components/finishedSessionHeader";
import { Notification } from "../components/notification";

const { useParam } = createParam()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SmallButton iconName={'arrow-left.svg'}/>
      <SessionPageHeader imgName={'dex-ezekiel-We6cFKHo8sQ-unsplash1.png'} title={'The Tree'} time={'24 min'} />
      <PoseElement imgName='dex-ezekiel-We6cFKHo8sQ-unsplash1.png'/>
      <BigButton text={'Start'} />

      <PlayInfo title={'Super Back Twister'} time={'28'} />

      <FinishedSession title={'Ultimate Stretcher'} />
      <Notification title={'You\'re a loser if you give up now?'} text={'Do you really want to canle your training?'} />

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
