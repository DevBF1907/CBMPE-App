import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { authStyles } from '../../styles';
import { authService } from '../../services/api/authService';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rank: '',
    unit: '',
  });

  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o nome completo.');
      return false;
    }

    if (!formData.email.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o email.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Atenção', 'Por favor, insira um email válido.');
      return false;
    }

    if (!formData.password) {
      Alert.alert('Atenção', 'Por favor, preencha a senha.');
      return false;
    }

    if (formData.password.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter no mínimo 6 caracteres.');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return false;
    }

    if (!formData.rank.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha a patente.');
      return false;
    }

    if (!formData.unit.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha a unidade.');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      console.log('🔄 [REGISTER] Iniciando cadastro...');
      console.log('📝 [REGISTER] Dados:', {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        rank: formData.rank.trim(),
        unit: formData.unit.trim(),
        passwordLength: formData.password.length,
      });

      const result = await authService.register({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        rank: formData.rank.trim(),
        unit: formData.unit.trim(),
      });

      console.log('✅ [REGISTER] Cadastro bem-sucedido:', result);

      Alert.alert(
        'Sucesso',
        'Cadastro realizado com sucesso! Faça login para continuar.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
      );
    } catch (error: any) {
      console.error('❌ [REGISTER] Erro no cadastro:', error);

      const errorMessage = error?.message || 'Erro desconhecido ao realizar cadastro.';

      Alert.alert('Erro ao Cadastrar', errorMessage, [{ text: 'OK' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ScrollView
        style={authStyles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
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
          <Text style={authStyles.systemTitle}>Cadastro de Bombeiro</Text>
        </View>

        <View style={authStyles.formContainer}>
          <View style={authStyles.formCard}>
            <Text style={authStyles.formTitle}>Criar Conta</Text>

            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Nome Completo *</Text>
              <TextInput
                style={authStyles.input}
                placeholder="Ex: João da Silva"
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                autoCapitalize="words"
              />
            </View>

            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Email *</Text>
              <TextInput
                style={authStyles.input}
                placeholder="seu.email@cbmpe.pe.gov.br"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Patente *</Text>
              <TextInput
                style={authStyles.input}
                placeholder="Ex: Soldado, Cabo, Sargento"
                value={formData.rank}
                onChangeText={(text) => setFormData({ ...formData, rank: text })}
                autoCapitalize="words"
              />
            </View>

            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Unidade *</Text>
              <TextInput
                style={authStyles.input}
                placeholder="Ex: 1º BBM, 2º BBM, COE"
                value={formData.unit}
                onChangeText={(text) => setFormData({ ...formData, unit: text })}
                autoCapitalize="words"
              />
            </View>

            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Senha *</Text>
              <TextInput
                style={authStyles.input}
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry
              />
            </View>

            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Confirmar Senha *</Text>
              <TextInput
                style={authStyles.input}
                placeholder="Digite a senha novamente"
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  setFormData({ ...formData, confirmPassword: text })
                }
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={[authStyles.button, loading && authStyles.buttonDisabled]}
              onPress={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={authStyles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>

            <View style={authStyles.linkContainer}>
              <Text style={authStyles.linkText}>Já tem uma conta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={authStyles.link}>Fazer Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
