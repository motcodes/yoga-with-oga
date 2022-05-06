import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'

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

    const poseListWithHeading = tree[0].children[0].children[0].children[1]
    expect(tree instanceof Object).toBe(true)
    expect(poseListWithHeading.children.length).toBe(12)
  })
})

describe('<SessionWorkoutScreen /> Pose List with Heading', () => {
  it('has "Workout Overview" as heading', () => {
    jest.useFakeTimers()
    const { getByText } = render(
      <Dripsy>
        <SessionWorkoutScreen
          sessionId={sessionId}
          workoutId={workoutId}
          workout={workout}
        />
      </Dripsy>
    )
    expect(getByText('Workout Overview')).toBeTruthy()
  })
})

describe('<SessionWorkoutScreen /> Pose List with Heading', () => {
  it('has 11 Poses', () => {
    jest.useFakeTimers()
    const tree = render(
      <Dripsy>
        <SessionWorkoutScreen
          sessionId={sessionId}
          workoutId={workoutId}
          workout={workout}
        />
      </Dripsy>
    )
    const poseListWithHeading =
      tree.toJSON()[0].children[0].children[0].children[1].children
    poseListWithHeading.shift()
    poseListWithHeading.forEach((item, index) => {
      const poseName = item.children[0].children[2].children[0].children[0]
      expect(poseName).toBe(workout.poses[index].title)
    })
  })
})
