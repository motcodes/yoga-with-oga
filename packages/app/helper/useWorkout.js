import { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from 'app/firebase/client'

export function useWorkout(workoutId) {
  const [video, setVideo] = useState([])
  const videoDoc = doc(db, 'video', workoutId)

  useEffect(() => {
    const fetchSession = async () => {
      const videoSnapshot = await getDoc(videoDoc)
      if (videoSnapshot.exists()) {
        const videoData = videoSnapshot.data()
        console.log('videoData :', videoData)
        const vimeoRes = await fetch(
          `https://yoga-with-oga.vercel.app/api/vimeo/${videoData.videoId}`
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
