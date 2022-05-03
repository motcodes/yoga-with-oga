import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Banner } from '../components/session'

const { useParam } = createParam()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <SafeAreaView>
      <ScrollView
        sx={{
          display: 'flex',
          mx: 16,
        }}
      >
        <Banner
          imageUrl="https://images.unsplash.com/photo-1567281150864-5296ada11f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          title="Downward Facing Dog"
          subtitle="24 min"
          highlight="test"
        />

        <TextLink href="/">👈 Go Home</TextLink>
      </ScrollView>
    </SafeAreaView>
  )
}
