import { db } from '../firebase/client'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

export function addPastSession(sessionSlug, user, setUser) {
  if (!user) {
    return
  }

  const { id, ...data } = user

  let pastSessions = []
  if (data.pastSessions) {
    data.pastSessions.push({ session: sessionSlug, timeStamp: new Date() })
  } else {
    pastSessions.push({ session: sessionSlug, timeStamp: new Timestamp() })
    data.pastSessions = pastSessions
  }

  setDoc(doc(db, 'users', user.id), { ...data })

  setUser({ ...data, id: id })
}
