import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import OccurrenceFormScreen from './src/screens/OccurrenceFormScreen';
import SignatureScreen from './src/screens/SignatureScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />

       <Stack.Screen name="Nova Ocorrência" component={OccurrenceFormScreen} />
       <Stack.Screen name="Assinatura" component={SignatureScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
