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
import { useSignIn } from "../../helper/useSignIn";

import { auth, db } from '../../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { TextLink } from 'solito/link'
import { useUser } from '../../provider/userContext'

export const SignIn = () => {
    const { push, replace, back, parseNextPath } = useRouter()
    const { user, setUser } = useUser()

    if (user && user.id !== '') {
        push('/')
    }

    const [state, dispatch] = useSignIn()
    
    let mailBC = '$grey80'
    let passwordBC = '$grey80'
    if (state.mail.gotTargeted && state.mail.val === '') mailBC = '$salmon'
    if (state.password.gotTargeted && state.password.val === '') passwordBC = '$salmon'

    const [modalVisible, setModalVisible] = useState(false)

    const onClickContinue = (mail, password, { push }) => {
        if (mail && password) {
            onSignUpSubmit(mail, password, { push })
        } else {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 2000);
        }
    }

    const onSignUpSubmit = async (mail, password, { push }) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(
              auth,
              mail,
              password
            )

            const uId = userCredentials.user.uid
            await getDoc(doc(db, 'users', uId)).then((data) => {
                setUser({...data.data(), id: uId})

                push('/')
            })
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
                New To Yoga with Oga?
                </Text>
                <Text variant={'small'} sx={{ color: '$yellow' }}>
                Sign up for free
                </Text>
                <View sx={{ height: 16 }} />
                <Input
                value={state.mail.val}
                onChange={text => dispatch({ type: 'mailChange', value: text })}
                placeholder="Email address*"
                style={{ borderColor: mailBC }}
                />
                <View sx={{ height: 12 }} />
                <Input
                value={state.password.val}
                onChange={text => dispatch({ type: 'passwordChange', value: text })}
                placeholder="Password*"
                type="password"
                style={{ borderColor: passwordBC }}
                secureTextEntry={true}
                />
                <View sx={{ height: 24 }} />
        
                <Button
                  onClick={() => onClickContinue(state.mail.val, state.password.val, { push, setModalVisible, modalVisible })}
                >
                  Continue
                </Button>
                <View sx={{ height: 12 }} />
                <Button variant={'text'}>
                  <TextLink href={'/auth/signUp'}>
                    Sign Up
                  </TextLink>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}