import { Box, Flex, H3, H4, H5, extraSmall, Text, View, useSx, ScrollView, SafeAreaView } from 'dripsy'
import { useState } from 'react'
import { TextLink } from 'solito/link'
import { Input } from '../components/input'
import { Button } from '../components/button'

export function SignUp({ user, setUser }) {
  const [userName, setUserName] = useState()
  const [firstName, setFirstName] = useState()
  const [mail, setMail] = useState()
  const [password, setPassword] = useState()

  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
          mx: 16,
        }}
      >
        <Text variant={'base'} sx={{ color: '$green' }}>Welcome to Yoga with Oga</Text>
        <Text variant={'small'} sx={{ color: '$greenLight' }}>Create an account to access yoga sessions, meditations and more</Text>
        <View sx={{ height: 16 }} />

        <Input
          value={userName}
          onChange={setUserName}
          placeholder="Username*"
        />
        <View sx={{ height: 12 }} />
        <Input
          value={firstName}
          onChange={setFirstName}
          placeholder="First name*"
        />
        <View sx={{ height: 12 }} />
        <Input
          value={mail}
          onChange={setMail}
          placeholder="Email address*"
        />
        <View sx={{ height: 12 }} />
        <Input
          value={password}
          onChange={setPassword}
          placeholder="Password*"
        />

        <View sx={{ height: 16 }} />
        <Text variant={'extraSmall'} sx={{ color: '$grey45' }}>By signing up, you’re agree to our Terms and Conditions and Privacy Policy</Text>
        <View sx={{ height: 24 }} />

        <Button>Continue</Button>
        <View sx={{ height: 12 }} />
        <Button variant={'text'}>Sign In</Button>
      </ScrollView>
    </SafeAreaView>
  )
}
