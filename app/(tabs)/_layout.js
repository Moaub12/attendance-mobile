import { Tabs } from 'expo-router'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
  <Tabs>
    <Tabs.Screen name ="Hometab"  options={{ headerShown: false,title:'Home',  tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ), }} />
    <Tabs.Screen name ="ProfileTab"  options={{ headerShown: false,title:'Profile', tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ), }}/>
  </Tabs>  
)
}

export default TabsLayout