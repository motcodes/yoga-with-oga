import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, getB } from '@testing-library/react-native';

import { Dripsy } from 'app/provider/dripsy'
import { getDays } from '../../helper/getDays'
import { ProfileScreen } from '../../features/profile'
import { Timestamp } from 'firebase/firestore';
import { testUser } from '../testProfileData'
import { UserContext } from 'app/provider/userContext';

const user = testUser

describe('getDays', () => {
    it('returns "Today" if tow dates are the same', () => {
        const todayAsTimeStamp = Timestamp.fromDate(new Date())

        const result = getDays(todayAsTimeStamp)
        
        expect(result).toBe('Today')
    })

    it('returns "Yesterday" if two dates are one day apart', () => {
        const yesterdayAsDate = new Date(new Date().setDate(new Date().getDate() - 1))
        const yesterdayAsTimeStamp = Timestamp.fromDate(yesterdayAsDate)

        const result = getDays(yesterdayAsTimeStamp)
        
        expect(result).toBe('Yesterday')
    })

    it('returns "2 days ago" if two dates are two days apart', () => {
        const date = new Date(new Date().setDate(new Date().getDate() - 2))
        const timeStamp = Timestamp.fromDate(date)

        const result = getDays(timeStamp)
        
        expect(result).toBe('2 days ago')
    })
})

describe('<ProfileScreen />', () => {
    it('displays given Username', () => {
        const { getByText } = render(
                <Dripsy>
                    <UserContext.Provider value={{user: user}}>
                        <ProfileScreen />
                    </UserContext.Provider>
                </Dripsy>
            )
            
        expect(getByText(user.firstName)).toBeTruthy()
    })

    it('displays "2 sessions done" when given 2 past sessions', () => {
        const { getByText } = render(
                <Dripsy>
                    <UserContext.Provider value={{user: user}}>
                        <ProfileScreen />
                    </UserContext.Provider>
                </Dripsy>
            )
            
        expect(getByText('2 sessions done')).toBeTruthy()
    })

    it('displays "1 session done" when given 1 past session', () => {
        const { getByText } = render(
                <Dripsy>
                    <UserContext.Provider value={{user: { firstName: user.firstName, pastSessions: [{test}] }}}>
                        <ProfileScreen />
                    </UserContext.Provider>
                </Dripsy>
            )
            
        expect(getByText('1 session done')).toBeTruthy()
    })

    it('displays "No sessions done yet" when given 1 past session', () => {
        const { getByText } = render(
                <Dripsy>
                    <UserContext.Provider value={{user: { firstName: user.firstName }}}>
                        <ProfileScreen />
                    </UserContext.Provider>
                </Dripsy>
            )
            
        expect(getByText('No sessions done yet')).toBeTruthy()
    })
})