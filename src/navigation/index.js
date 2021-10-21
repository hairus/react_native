import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screen/Home';
import Profile from '../screen/Profile';
import CreateData from '../screen/CreateData';

const Tab = createBottomTabNavigator();

const Component = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="CreateData" component={CreateData} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Component;
