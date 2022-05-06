import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'

import { HomeScreen } from 'app/features/home/screen'
import { testHomeData } from '../testHomeData'
import { testUserData } from '../testUserData'
import { Dripsy } from 'app/provider/dripsy'

describe('<HomeScreen />', () => {
  it('Wrapper has 2 children', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <HomeScreen sessions={testHomeData} user={testUserData} />
        </Dripsy>
      )
      .toJSON()

    expect(Array.isArray(tree.children)).toBe(true)
    expect(tree.children.length).toBe(2)
  })
})

describe('<HomeScreen />', () => {
  it('has 1 child when session is empty', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <HomeScreen sessions={{}} user={testUserData} />
        </Dripsy>
      )
      .toJSON()

    expect(tree instanceof Object).toBe(true)
    expect(Object.keys(tree).length).toBe(3)
  })
})

describe('<HomeScreen />', () => {
  it('has 5 Yoga Sessions', () => {
    jest.useFakeTimers()
    const tree = render(
      <Dripsy>
        <HomeScreen sessions={testHomeData} user={testUserData} />
      </Dripsy>
    )

    testHomeData.forEach((item) => {
      expect(tree.getByText(item.title)).toBeTruthy()
      expect(tree.getByText(item.subtitle)).toBeTruthy()
    })
  })
})

// describe('<SessionWorkoutScreen /> Pose List with Heading', () => {
//   it('has 12 children', () => {
//     jest.useFakeTimers()
//     const tree = renderer
//       .create(
//         <Dripsy>
//           <SessionWorkoutScreen
//             sessionId={sessionId}
//             workoutId={workoutId}
//             workout={workout}
//           />
//         </Dripsy>
//       )
//       .toJSON()

//     const poseListWithHeading = tree[0].children[0].children[0].children[1]
//     expect(tree instanceof Object).toBe(true)
//     expect(poseListWithHeading.children.length).toBe(12)
//   })
// })

// describe('<SessionWorkoutScreen /> Pose List with Heading', () => {
//   it('has "Workout Overview" as heading', () => {
//     jest.useFakeTimers()
//     const { getByText } = render(
//       <Dripsy>
//         <SessionWorkoutScreen
//           sessionId={sessionId}
//           workoutId={workoutId}
//           workout={workout}
//         />
//       </Dripsy>
//     )
//     expect(getByText('Workout Overview')).toBeTruthy()
//   })
// })

// describe('<SessionWorkoutScreen /> Pose List with Heading', () => {
//   it('has 11 Poses', () => {
//     jest.useFakeTimers()
//     const tree = render(
//       <Dripsy>
//         <SessionWorkoutScreen
//           sessionId={sessionId}
//           workoutId={workoutId}
//           workout={workout}
//         />
//       </Dripsy>
//     )
//     const poseListWithHeading =
//       tree.toJSON()[0].children[0].children[0].children[1].children
//     poseListWithHeading.shift()
//     poseListWithHeading.forEach((item, index) => {
//       const poseName = item.children[0].children[2].children[0].children[0]
//       expect(poseName).toBe(workout.poses[index].title)
//     })
//   })
// })
