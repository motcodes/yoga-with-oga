import { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from 'app/firebase/client'

export function useWorkoutVideo(videoId) {
  const [video, setVideo] = useState([])
  const videoDoc = doc(db, 'video', videoId)

  useEffect(() => {
    const fetchSession = async () => {
      const videoSnapshot = await getDoc(videoDoc)
      if (videoSnapshot.exists()) {
        const videoData = videoSnapshot.data()
        // `https://yoga-with-oga.vercel.app/api/vimeo/${videoData.videoId}`
        const vimeoRes = await fetch(
          `http://localhost:3000/api/vimeo/${videoData.videoId}`
        )
        const vimeoData = await vimeoRes.json()
        setVideo({ ...video, ...vimeoData })
      } else {
        console.log('No such document!')
      }
    }
    fetchSession()
  }, [])

  return video
}
