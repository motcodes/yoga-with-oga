import {
    Box,
    Flex,
    H3,
    H4,
    H5,
    extraSmall,
    Text,
    View,
    useSx,
    ScrollView,
    SafeAreaView
} from 'dripsy'
import { useState } from 'react'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useRouter } from 'solito/router'
import { InputErrorToast } from '../components/inputErrorToast'
import { Logo } from '../components/logo'
import { usePersonalInfo } from '../../helper/usePersonalInfo'

import { db } from '../../firebase/client'
import { doc, setDoc } from 'firebase/firestore'
import { TextLink } from 'solito/link'
import { useUser } from '../../provider/userContext'

export const PersonalInfo = () => {
    const { push, replace, back, parseNextPath } = useRouter()
    const { user, setUser } = useUser()

    if (!user) {
        //push('/')
    }
    
    const [state, dispatch] = usePersonalInfo()
    
    let genderBC = '$grey80'
    let heightBC = '$grey80'
    let weightBC = '$grey80'
    if (state.gender.gotTargeted && state.gender.val === '') genderBC = '$salmon'
    if (state.height.gotTargeted && state.height.val === '') heightBC = '$salmon'
    if (state.weight.gotTargeted && state.weight.val === '') weightBC = '$salmon'

    const [modalVisible, setModalVisible] = useState(false)

    const onClickLogIn = (gender, height, weight, { push, user }) => {
        if (gender && height && weight) {
            onPersonalInfoSubmit(gender, height, weight, { push, user })
        } else {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 2000);
        }
    }

    const onPersonalInfoSubmit = async (gender, height, weight, { push, user }) => {
        try {
            await setDoc(doc(db, 'users', user.id), { userName: user.userName, firstName: user.firstName, gender: gender, height: height, weight: weight })        
    
            push('/')
        } catch (error) {
            console.log(error)

            setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
            }, 2000);
        }
    }

    return(
        <SafeAreaView>
            <ScrollView
                sx={{
                display: 'flex',
                mx: 16,
                }}
            >
                <InputErrorToast modalVisible={modalVisible} />
        
                <View sx={{ height: 32 }} />
                
                {/*<Logo />*/}

                <View sx={{ height: 32 }} />

                <Text variant={'base'} sx={{ color: '$green' }}>
                    Almost ready
                </Text>
                <Text variant={'small'} sx={{ color: '$greenLight' }}>
                    Just some more information about yourself, which helps us create a better experience.
                </Text>
                <View sx={{ height: 16 }} />
                <Input
                value={state.gender.val}
                onChange={text => dispatch({ type: 'genderChange', value: text })}
                placeholder="Gender"
                style={{ borderColor: genderBC }}
                />
                <View sx={{ height: 12 }} />
                <Input
                value={state.height.val}
                onChange={text => dispatch({ type: 'heightChange', value: text })}
                placeholder="Height"
                style={{ borderColor: heightBC }}
                />
                <View sx={{ height: 12 }} />
                <Input
                value={state.weight.val}
                onChange={text => dispatch({ type: 'weightChange', value: text })}
                placeholder="Weight"
                style={{ borderColor: weightBC }}
                />
                <View sx={{ height: 16 }} />
                <Text variant={'extraSmall'} sx={{ color: '$grey45' }}>
                    By signing up, you’re agree to our Terms and Conditions and Privacy
                    Policy
                </Text>
                <View sx={{ height: 24 }} />
        
                <Button
                  onClick={() => onClickLogIn(state.gender.val, state.height.val, state.weight.val, { push, user })}
                >
                  Sign Up
                </Button>
                <View sx={{ height: 12 }} />
                <Button variant={'outlined'}>
                  <TextLink href={'/'}>
                    Skip for now
                  </TextLink>
                </Button>
                <View sx={{ height: 12 }} />
                <View sx={{ alignItems: 'center' }}>
                    <Text variant={'small'} sx={{ color: '$grey45' }}>or</Text>
                </View>
                <View sx={{ height: 12 }} />
                <Button variant={'text'}>
                  <TextLink href={'/auth/signUp'}>
                    Sign In
                  </TextLink>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}