import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Flex
} from 'dripsy'
import { useUser } from '../../provider/userContext'
import { useRouter } from 'solito/router'
import { Link } from 'solito/link'
import { auth } from '../../firebase/client'
import { SettingsListItem } from '../components/settingsListItem'
import { useEffect, useState } from 'react'
import { useEditProfile } from '../../helper/useEditProfile'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { InputErrorToast } from '../components/inputErrorToast'
import { onClickSave } from '../../helper/onClickSave'

import { db } from '../../firebase/client'
import { doc, setDoc } from 'firebase/firestore'

export const EditProfile = () => {
    const { user, setUser } = useUser()
    const { push } = useRouter()
    const [state, dispatch] = useEditProfile()
    const [modalVisible, setModalVisible] = useState(false)
    const [mail, setMail] = useState()
    
    useEffect(() => {
        if (!user) {
            push('/')
        }
        else {
            console.log(user)
            dispatch({ type: 'userNameChange', value: user.userName })
            dispatch({ type: 'firstNameChange', value: user.firstName })
            dispatch({ type: 'genderChange', value: user.gender === '' ? undefined : user.gender })
            dispatch({ type: 'heightChange', value: user.height === '' ? undefined : user.height })
            dispatch({ type: 'weightChange', value: user.weight === '' ? undefined : user.weight })

            if (auth) setMail(auth.currentUser.email)
        }
    }, [user, auth])
    
    useEffect(() => {
        if (state.userName.gotTargeted && state.userName.val === '') dispatch({ type: 'userNameBcChange' })
        if (state.firstName.gotTargeted && state.firstName.val === '') dispatch({ type: 'firstNameBcChange' })
    }, [state])


    /*function onClickSave ({ state, push, user, setUser }) {
        if (state.userName.val && state.firstName.val) {
            onEditProfileSubmit({ state, push, user, setUser })
        } else {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 2000);
        }
    }

    async function onEditProfileSubmit ({ state, push, user, setUser }) {
        try {
            const { id, gender, height, weight, ...tmpUser } = user
            let data = { ...tmpUser, userName: state.userName.val, firstName: state.firstName.val }
            if (state.gender.val && state.gender.val !== '') data = { ...data, gender: state.gender.val}
            if (state.height.val && state.height.val !== '') data = { ...data, height: state.height.val}
            if (state.weight.val && state.weight.val !== '') data = { ...data, weight: state.weight.val}

            await setDoc(doc(db, 'users', id), data)
            setUser({ ...data, id: id })

            push('/profile/settings')
        } catch (error) {
            console.log(error)

            setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
            }, 2000);
        }
    }*/

    return (
        <SafeAreaView>
            <ScrollView>
                <InputErrorToast modalVisible={modalVisible} />

                <View sx={{
                    mx: 16,
                    alignItems: 'center'
                }}>
                    <View sx={{ height: 58 }} />
                    <Text variant={'h4'} sx={{ color: '$greenDark' }}>Edit Profile</Text>
                    <View sx={{ height: 62 }}/>
                </View>

                <SettingsListItem title='Email' info={mail} />
                <View sx={{ height: 16 }} />

                <Flex sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    mx: 16
                }}>
                    <Input
                    value={state.userName.value}
                    onChange={text => dispatch({ type: 'userNameChange', value: text })}
                    placeholder="User Name"
                    style={{ borderColor: state.userNameBC }}
                    />
                    <View sx={{ height: 12 }} />
                    <Input
                    value={state.firstName.value}
                    onChange={text => dispatch({ type: 'firstNameChange', value: text })}
                    placeholder="First Name"
                    style={{ borderColor: state.firstNameBC }}
                    />
                    <View sx={{ height: 12 }} />
                    <Input
                    value={state.gender.value}
                    onChange={text => dispatch({ type: 'genderChange', value: text })}
                    placeholder="Gender"
                    style={{ borderColor: '$grey80' }}
                    />
                    <View sx={{ height: 12 }} />
                    <Input
                    value={state.height.value}
                    onChange={text => dispatch({ type: 'heightChange', value: text })}
                    placeholder="Height"
                    style={{ borderColor: '$grey80' }}
                    />
                    <View sx={{ height: 12 }} />
                    <Input
                    value={state.weight.value}
                    onChange={text => dispatch({ type: 'weightChange', value: text })}
                    placeholder="Weight"
                    style={{ borderColor: '$grey80' }}
                    />
            
                    <View sx={{ height: 24 }} />
                    <Button
                        onClick={() => OnClickSave({ state, push, user, setUser, setModalVisible })}
                    >
                        Save
                    </Button>
                    <View sx={{ height: 64 }} />
                </Flex>
            </ScrollView>
        </SafeAreaView>
    )
}