import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { authStyles } from '../../styles';
import { authService } from '../../services/api/authService';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      await authService.login({ email, password });
      Alert.alert('Sucesso', 'Login realizado com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Dashboard') }
      ]);
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Erro ao fazer login.');
    } finally {
      setLoading(false);
    }
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

          <TouchableOpacity
            style={[authStyles.button, loading && authStyles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={authStyles.buttonText}>Acessar Sistema</Text>
            )}
          </TouchableOpacity>

          <View style={authStyles.linkContainer}>
            <Text style={authStyles.linkText}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={authStyles.link}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;