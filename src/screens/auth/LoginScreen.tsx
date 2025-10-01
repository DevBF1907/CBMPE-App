import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { authStyles } from '../../styles';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!', [
      { text: 'OK', onPress: () => navigation.navigate('Dashboard') }
    ]);
  };

  return (
    <View style={authStyles.container}>
      <View style={authStyles.header}>
        <View style={authStyles.logoContainer}>
          <Image 
            source={require('../../assets/images/brasao.png')} 
            style={authStyles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={authStyles.title}>CBMPE</Text>
        <Text style={authStyles.subtitle}>Corpo de Bombeiros Militar de Pernambuco</Text>
        <Text style={authStyles.systemTitle}>Sistema de Gestão de Ocorrências</Text>
      </View>

      <View style={authStyles.formContainer}>
        <View style={authStyles.formCard}>
          <Text style={authStyles.formTitle}>Acesso ao Sistema</Text>
          
          <View style={authStyles.inputContainer}>
            <Text style={authStyles.label}>Email</Text>
            <TextInput
              style={authStyles.input}
              placeholder="seu.email@cbmpe.pe.gov.br"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={authStyles.inputContainer}>
            <Text style={authStyles.label}>Senha</Text>
            <TextInput
              style={authStyles.input}
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={authStyles.button} onPress={handleLogin}>
            <Text style={authStyles.buttonText}>Acessar Sistema</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;