import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';
import Modal from '../screens/Modal';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
                        drawerStyle: { backgroundColor: '#fff', width: 250 },
                        headerStyle: { backgroundColor: '#f4511e' },
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold' },
                        drawerActiveTintColor: 'blue',
                        drawerLabelStyle: { color: '#111' },
                      }}>
        <Drawer.Screen name="Tabs" component={TabNavigator} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Modal" component={Modal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
