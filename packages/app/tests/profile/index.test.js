import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, getB } from '@testing-library/react-native';

import { getDays } from '../../helper/getDays'
import { Dripsy } from 'app/provider/dripsy'
import { SignUp } from '../../features/auth/signUp'
import { UserContext } from 'app/provider/userContext';
import { Timestamp } from 'firebase/firestore';

describe('getDays', () => {
    it('returns "Today" if tow dates are the same', () => {
        const todayAsTimeStamp = Timestamp.fromDate(new Date())

        const result = getDays(todayAsTimeStamp)
        
        expect(result).toBe('Yesterday')
    })

    it('returns "Yesterday" if two dates are one day apart', () => {
        const yesterdayAsDate = new Date(new Date().setDate(new Date().getDate()))
        const yesterdayAsTimeStamp = Timestamp.fromDate(yesterdayAsDate)

        const result = getDays(yesterdayAsTimeStamp)
        
        expect(result).toBe('Yesterday')
    })

    it('returns "2 days ago" if two dates are two days apart', () => {
        const date = new Date(new Date().setDate(new Date().getDate() - 1))
        const timeStamp = Timestamp.fromDate(date)

        const result = getDays(timeStamp)
        
        expect(result).toBe('2 days ago')
    })
  })