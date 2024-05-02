import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
  <Tabs>
    <Tabs.Screen name ="index"/>
    <Tabs.Screen name ="ProfileTab"/>
  </Tabs>  
)
}

export default TabsLayout