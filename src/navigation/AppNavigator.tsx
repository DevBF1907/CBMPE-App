import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Colors, FontSizes } from '../utils/constants';

// Screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import OccurrenceFormScreen from '../screens/occurrences/OccurrenceFormScreen';
import OccurrenceListScreen from '../screens/occurrences/OccurrenceListScreen';
import SignatureScreen from '../screens/occurrences/SignatureScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: FontSizes.lg,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ 
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ 
            title: 'Dashboard',
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="OccurrenceForm"
          component={OccurrenceFormScreen}
          options={{ title: 'Nova Ocorrência' }}
        />
        <Stack.Screen
          name="OccurrenceList"
          component={OccurrenceListScreen}
          options={{ title: 'Lista de Ocorrências' }}
        />
        <Stack.Screen
          name="Signature"
          component={SignatureScreen}
          options={{ title: 'Assinatura Digital' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
