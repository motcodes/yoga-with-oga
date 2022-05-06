import { db } from '../firebase/client'
import { getDoc, doc } from 'firebase/firestore'
import { getDays } from './getDays'

export async function getSession({ session, setSessions }) {
  console.log('session :', session)
  const response = await getDoc(doc(db, 'session', session.session))
  const data = response.data()

  setSessions((prev) => [
    ...prev,
    {
      sessionId: session.session,
      imageUrl: data.imageUrl,
      subTitle: data.subtitle,
      title: data.title,
      lastDone: getDays(session.timeStamp),
    },
  ])
}
