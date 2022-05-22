import { useEffect, useState } from 'react'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { db } from 'app/firebase/client'

export const sessionCol = collection(db, 'session')

export function useSessions() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchSession = async () => {
      const sessionsSnapshot = await getDocs(sessionCol)
      const sessions = sessionsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setVideos(sessions)
    }
    fetchSession()
  }, [])

  return videos
}

export function useSession(slug) {
  const [video, setVideo] = useState([])

  useEffect(() => {
    const fetchSession = async (sessionBlock) => {
      const sessionSnapshot = await getDoc(sessionBlock)
      if (sessionSnapshot.exists()) {
        const session = sessionSnapshot.data()
        const videos = await Promise.all(
          session.videos.map(async (item) => {
            const videoSnap = await getDoc(item)
            const video = videoSnap.data()

            video.id = item.id
            return video
          })
        )
        session.videos = videos
        session.id = slug
        setVideo(session)
      } else {
        console.log('No such document!')
      }
    }
    if (slug) {
      const sessionBlock = doc(db, 'session', slug)
      fetchSession(sessionBlock)
    }
  }, [slug])

  return video
}
