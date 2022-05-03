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
    const fetchSession = async () => {
      const sessionBlock = doc(db, 'session', slug)
      const sessionSnapshot = await getDoc(sessionBlock)
      if (sessionSnapshot.exists()) {
        const session = sessionSnapshot.data()
        const videos = await Promise.all(
          session.videos.map(async (item) => {
            const videoSnap = await getDoc(item)
            const video = videoSnap.data()
            console.log('video :', video)
            const vimeoRes = await fetch(
              `http://localhost:3000/api/vimeo/${video.videoId}`
            )
            const vimeoData = await vimeoRes.json()
            video.vimeo = vimeoData
            return video
          })
        )
        session.videos = videos
        setVideo(session)
      } else {
        console.log('No such document!')
      }
    }
    fetchSession()
  }, [])

  return video
}

// export function usePoses() {}
