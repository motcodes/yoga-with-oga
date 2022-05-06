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
