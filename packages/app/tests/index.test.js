import React from 'react'
import renderer from 'react-test-renderer'

import { SessionWorkoutScreen } from 'app/features/workout'
import { testWorkoutData } from './testWorkoutData'
import { Dripsy } from 'app/provider/dripsy'

describe('<App />', () => {
  it('has 1 child', () => {
    jest.useFakeTimers()
    const sessionId = 'downward-facing-dog'
    const workoutId = 'downward-facing-dog'
    const workout = testWorkoutData
    const tree = renderer
      .create(
        <Dripsy>
          <SessionWorkoutScreen
            workout={workout}
            sessionId={sessionId}
            workoutId={workoutId}
          />
        </Dripsy>
      )
      .toJSON()
    console.log('tree.children.length :', tree)
    expect(tree.length).toBe(3)
  })
})
