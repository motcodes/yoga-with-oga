import { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from 'app/firebase/client'

export function useWorkout(workoutId) {
  const [workout, setWorkout] = useState([])
  const workoutDoc = doc(db, 'video', workoutId)

  useEffect(() => {
    const fetchSession = async () => {
      const workoutSnapshot = await getDoc(workoutDoc)
      if (workoutSnapshot.exists()) {
        const posesData = workoutSnapshot.data()
        const poses = await Promise.all(
          posesData.poses.map(async (item) => {
            const poseSnap = await getDoc(item)
            const pose = poseSnap.data()
            return pose
          })
        )
        posesData.poses = poses
        setWorkout({ ...posesData })
      } else {
        console.log('No such document!')
      }
    }
    fetchSession()
  }, [workoutId])

  return workout
}
