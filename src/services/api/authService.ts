// MODO MOCK - Testando frontend sem API
// Quando tiver a API pronta, altere USE_MOCK para false e use a implementação real

import { mockAuthService } from './authService.mock';
import { LoginCredentials, RegisterCredentials, User } from '../../types/auth';

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  user: User;
  message: string;
}

// ========================================
// CONFIGURAÇÃO: MODO MOCK (ATIVO)
// ========================================
// Mude para false quando tiver a API pronta
const USE_MOCK = true;

// ========================================
// IMPLEMENTAÇÃO REAL DA API (DESATIVADA)
// ========================================
// Quando USE_MOCK = false, descomente e use esta implementação:

/*
import api from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const realAuthService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await api.post<LoginResponse>('/auth/login', credentials);
      await AsyncStorage.setItem('@auth_token', response.data.token);
      await AsyncStorage.setItem('@user_data', JSON.stringify(response.data.user));
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || 
                     error.response?.data?.error ||
                     'Erro ao fazer login. Tente novamente.';
      throw new Error(message);
    }
  },

  async register(credentials: RegisterCredentials): Promise<RegisterResponse> {
    try {
      const response = await api.post<RegisterResponse>('/auth/register', credentials);
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || 
                     (Array.isArray(error.response?.data?.error) 
                       ? error.response.data.error.join(', ')
                       : error.response?.data?.error) ||
                     'Erro ao realizar cadastro. Tente novamente.';
      throw new Error(message);
    }
  },

  async getProfile(): Promise<User> {
    try {
      const response = await api.get<User>('/auth/me');
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Erro ao carregar perfil.'
      );
    }
  },

  async logout(): Promise<void> {
    await AsyncStorage.removeItem('@auth_token');
    await AsyncStorage.removeItem('@user_data');
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem('@auth_token');
    return !!token;
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem('@user_data');
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  },
};
*/

// ========================================
// EXPORT: Usa mock ou API real baseado na configuração
// ========================================
export const authService = USE_MOCK 
  ? mockAuthService 
  : mockAuthService; // Mude para realAuthService quando descomentar o código acima
