import { db } from '../firebase/client'
import { getDoc, doc } from 'firebase/firestore'
import { GetDays } from './getDays'

export async function GetSession ({ session, setSessions }) {
    const response = await getDoc(doc(db, 'session', session.session))
    const data = response.data()

    setSessions((prev) => ([...prev, {
        sessionId: session.session,
        imageUrl: data.imageUrl,
        subTitle: data.subtitle,
        title: data.title,
        lastDone: GetDays(session.timeStamp)
    } ]))
}