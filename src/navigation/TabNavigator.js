import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
     screenOptions={{headerShown: false}}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
      />
      
    </Tab.Navigator>
  );
}

export default TabNavigator;
