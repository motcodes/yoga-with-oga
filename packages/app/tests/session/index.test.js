import React from 'react'
import renderer from 'react-test-renderer'

import { SessionWorkoutScreen } from 'app/features/workout'
import { testWorkoutData } from '../testWorkoutData'
import { Dripsy } from 'app/provider/dripsy'

const sessionId = 'downward-facing-dog'
const workoutId = 'downward-facing-dog'
const workout = testWorkoutData
const emptyWorkout = {}

describe('<SessionWorkoutScreen />', () => {
  it('has 3 children', () => {
    jest.useFakeTimers()
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
    expect(tree.length).toBe(3)
  })
})

describe('<SessionWorkoutScreen />', () => {
  it('is instance of Object when workout is empty', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <SessionWorkoutScreen
            workout={emptyWorkout}
            sessionId={sessionId}
            workoutId={workoutId}
          />
        </Dripsy>
      )
      .toJSON()
    expect(tree instanceof Object).toBe(true)
  })
})

describe('<SessionWorkoutScreen />', () => {
  it('is instance of Object and has 3 object keys when workout is empty', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <SessionWorkoutScreen sessionId={sessionId} workoutId={workoutId} />
        </Dripsy>
      )
      .toJSON()
    expect(tree instanceof Object).toBe(true)
    expect(Object.keys(tree).length).toBe(3)
  })
})
describe('<SessionWorkoutScreen /> Pose List with Heading', () => {
  it('has 12 children', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <SessionWorkoutScreen
            sessionId={sessionId}
            workoutId={workoutId}
            workout={workout}
          />
        </Dripsy>
      )
      .toJSON()

    // console.log('tree :', tree[0].children[0].children[0].children[1])
    const poseListWithHeading = tree[0].children[0].children[0].children[1]
    expect(tree instanceof Object).toBe(true)
    expect(poseListWithHeading.children.length).toBe(12)
  })
})

describe('<SessionWorkoutScreen /> Pose List with Heading', () => {
  it('has "Workout Overview" as heading', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <SessionWorkoutScreen
            sessionId={sessionId}
            workoutId={workoutId}
            workout={workout}
          />
        </Dripsy>
      )
      .toJSON()

    // console.log('tree :', tree[0].children[0].children[0].children[1])
    const poseListWithHeading = tree[0].children[0].children[0].children[1]
    expect(tree instanceof Object).toBe(true)
    expect(poseListWithHeading.children[0]).includes('Workout Overview')
  })
})
