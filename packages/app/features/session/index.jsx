import { ScrollView, Text } from 'dripsy'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { createParam } from 'solito'

const { useParam } = createParam()
export function SessionScreen() {
  const [slug] = useParam('slug')
  console.log('slug :', slug)

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{slug}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
