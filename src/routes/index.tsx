import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Onboarding/Home';
import Sms from '../screens/Onboarding/Sms';

import {Platform} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
const Stack = createStackNavigator();
// const Stack = createStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={gestureHandlerRootHOC(Home)}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sms"
        component={gestureHandlerRootHOC(Sms)}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
