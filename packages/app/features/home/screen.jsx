import {
  Text,
  useSx,
  View,
  H1,
  P,
  Row,
  A,
  H2,
  Flex,
  ScrollView,
  SafeAreaView,
} from 'dripsy'
import React, { useState } from 'react'
import { MotiLink } from 'solito/moti'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Modal } from '../components/modal'
import { Banner } from '../components/session'
import { ListItem } from '../components/session/listItem'

export function HomeScreen() {
  const [textInput, setTextInput] = useState('')
  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
          mx: 16,
        }}
      >
        <H1>Welcome to Yoga with Oga</H1>
        <View sx={{ height: 32 }} />
        <Flex
          sx={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Input
            value={textInput}
            onChange={setTextInput}
            placeholder="Text Input"
          />
          <View sx={{ height: 32 }} />
          <Button>Button</Button>
          <View sx={{ height: 32 }} />
          <Banner
            imageUrl="https://images.unsplash.com/photo-1567281150864-5296ada11f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            title="Downward Facing Dog"
            subtitle="24min - Legs and Back"
            highlight="Featured"
          />
          <View sx={{ height: 32 }} />
          <ListItem />
          <View sx={{ height: 32 }} />
          <Modal
            title="You’re a loser if you give up now"
            copy="Do you really want to cancle your training?"
          />
        </Flex>
        <Row>
          <MotiLink href="/user/motcodes">
            <Text selectable={false} sx={{ color: '$yellow' }}>
              Moti Link
            </Text>
          </MotiLink>
        </Row>
      </ScrollView>
    </SafeAreaView>
  )
}
