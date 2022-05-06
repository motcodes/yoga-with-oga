import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, getB } from '@testing-library/react-native';

import { Dripsy } from 'app/provider/dripsy'
import { SignIn } from '../../features/auth/singIn'
import { UserContext } from 'app/provider/userContext';

describe('<SignIn />', () => {
    it('fails submission', () => {
        const failure = jest.fn()

        const { getByText } = render(
                <Dripsy>
                    <UserContext.Provider value={{username: 'Test'}}>
                        <SignIn onFailedCheckClick={failure} />
                    </UserContext.Provider>
                </Dripsy>
            )
            
        fireEvent.press(getByText('Continue').parent);
        
        
        expect(failure).toHaveBeenCalled()
    })

    it('successfully submission', () => {
        const success = jest.fn()

        const { getByPlaceholderText, getByText } = render(
                <Dripsy>
                    <UserContext.Provider value={{username: 'Test'}}>
                        <SignIn onSuccessfulCheckClick={success} />
                    </UserContext.Provider>
                </Dripsy>
            )

        
        fireEvent.changeText(getByPlaceholderText('Email address*'), 'test@test.at');
        fireEvent.changeText(getByPlaceholderText('Password*'), '123456');
        fireEvent.press(getByText('Continue').parent);
        
        
        expect(success).toHaveBeenCalled()
    })
  })