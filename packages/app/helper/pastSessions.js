import { db } from '../firebase/client'
import { doc, setDoc } from 'firebase/firestore'

export function AddPastSession(sessionSlug, user, setUser) {
    if (!user) {
        return
    }

    const {id, ...data} = user

    let pastSessions = []
    if (data.pastSessions) {
        data.pastSessions.push({ session: sessionSlug, timeStamp: (new Date()) })
    }
    else {
        pastSessions.push({ session: sessionSlug, timeStamp: (new Date()).getDate() })
        data.pastSessions = pastSessions
    }

    setDoc(doc(db, 'users', user.id), { ...data })

    setUser({ ...data, id: id })
}