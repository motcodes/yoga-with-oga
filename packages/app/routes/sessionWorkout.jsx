import React from 'react'
import { useParam, useWorkout } from 'app/helper'
import { SessionWorkoutScreen } from 'app/features/workout'

export const SessionWorkoutRoute = () => {
  const [sessionId] = useParam('sessionId')
  const [workoutId] = useParam('workoutId')

  const workout = useWorkout(workoutId)

  return (
    <SessionWorkoutScreen
      sessionId={sessionId}
      workoutId={workoutId}
      workout={workout}
    />
  )
}
