import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'

import { SessionScreen } from 'app/features/session'
import { testSessionData } from '../testSessionData'
import { Dripsy } from 'app/provider/dripsy'

const sessionId = 'downward-facing-dog'
const session = testSessionData

describe('<SessionScreen />', () => {
  it('Wrapper has 3 children', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <SessionScreen session={session} sessionId={sessionId} />
        </Dripsy>
      )
      .toJSON()
    expect(tree.children.length).toBe(3)
  })
})

describe('<SessionScreen />', () => {
  it('is instance of Object when workout is empty', () => {
    jest.useFakeTimers()
    const tree = renderer
      .create(
        <Dripsy>
          <SessionScreen session={{}} sessionId={sessionId} />
        </Dripsy>
      )
      .toJSON()

    expect(tree instanceof Object).toBe(true)
    expect(Object.keys(tree).length).toBe(3)
  })
})

describe('<SessionScreen /> Workout List', () => {
  it('has 4 children', () => {
    jest.useFakeTimers()
    const { getByText } = render(
      <Dripsy>
        <SessionScreen sessionId={sessionId} session={session} />
      </Dripsy>
    )

    testSessionData.videos.forEach((item, index) => {
      expect(getByText(item.title)).toBeTruthy()
    })
  })
})
