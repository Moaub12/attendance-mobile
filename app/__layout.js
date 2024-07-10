import { Stack, Tabs } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    //  <Stack.Screen name='index'></Stack.Screen>
      // <Stack.Screen name ="(tabs)"/>
    <Stack>
      <Stack.Screen name='index' ></Stack.Screen>
      <Stack.Screen name ="(tabs)" />
      <Stack.Screen name ="Attendances" />
    </Stack>
  )
}

export default RootLayout