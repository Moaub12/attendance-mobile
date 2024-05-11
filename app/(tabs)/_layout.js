import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
  <Tabs>
    <Tabs.Screen name ="Hometab"/>
    <Tabs.Screen name ="ProfileTab"/>
  </Tabs>  
)
}

export default TabsLayout