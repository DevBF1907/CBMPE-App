/**
 * MOCK AUTH SERVICE
 * 
 * Este arquivo simula um serviço de autenticação completo sem precisar de API.
 * 
 * Funcionalidades:
 * - Cadastro de usuários (armazenado em memória)
 * - Login com validação
 * - Logout
 * - Verificação de autenticação
 * - Gerenciamento de tokens no AsyncStorage
 * 
 * IMPORTANTE: 
 * - Os dados são armazenados apenas em memória (perdidos ao recarregar o app)
 * - As senhas são armazenadas em texto plano (apenas para testes)
 * - Este é apenas para desenvolvimento/testes do frontend
 * 
 * Para usar a API real:
 * 1. Vá para authService.ts
 * 2. Mude USE_MOCK para false
 * 3. Descomente o código da API real
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginCredentials, RegisterCredentials, User } from '../../types/auth';

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  user: User;
  message: string;
}

// Banco de dados mock em memória (simula banco de dados)
// NOTA: Os dados são perdidos quando o app é fechado/recarregado
const mockUsers: Array<User & { password: string }> = [];

// Simula delay de rede
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAuthService = {
  async register(credentials: RegisterCredentials): Promise<RegisterResponse> {
    try {
      console.log('🔄 [MOCK] Iniciando registro...');
      console.log('📝 [MOCK] Credenciais recebidas:', {
        name: credentials.name,
        email: credentials.email,
        rank: credentials.rank,
        unit: credentials.unit,
        hasPassword: !!credentials.password,
      });

      // Simula delay da rede (800ms)
      await delay(800);

      // Validações adicionais
      if (!credentials.name || !credentials.name.trim()) {
        throw new Error('Nome é obrigatório.');
      }

      if (!credentials.email || !credentials.email.trim()) {
        throw new Error('Email é obrigatório.');
      }

      if (!credentials.password || credentials.password.length < 6) {
        throw new Error('Senha deve ter no mínimo 6 caracteres.');
      }

      if (!credentials.rank || !credentials.rank.trim()) {
        throw new Error('Patente é obrigatória.');
      }

      if (!credentials.unit || !credentials.unit.trim()) {
        throw new Error('Unidade é obrigatória.');
      }

      // Validação: verificar se email já existe
      const userExists = mockUsers.find(
        u => u.email === credentials.email.toLowerCase()
      );
      
      if (userExists) {
        console.log('❌ [MOCK] Email já existe:', credentials.email);
        throw new Error('Email já cadastrado no sistema.');
      }

      // Criar novo usuário
      const userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
      const newUser: User = {
        id: userId,
        email: credentials.email.toLowerCase().trim(),
        name: credentials.name.trim(),
        rank: credentials.rank.trim(),
        unit: credentials.unit.trim(),
        isActive: true,
        createdAt: new Date(),
      };

      // Salvar no "banco de dados" mock
      mockUsers.push({
        ...newUser,
        password: credentials.password, // Em produção, isso seria um hash
      });

      console.log('✅ [MOCK] Usuário cadastrado com sucesso:', newUser.email);
      console.log('📊 [MOCK] Total de usuários cadastrados:', mockUsers.length);
      console.log('👤 [MOCK] ID do usuário:', newUser.id);

      return {
        user: newUser,
        message: 'Cadastro realizado com sucesso!',
      };
    } catch (error: any) {
      console.error('❌ [MOCK] Erro no registro:', error);
      console.error('❌ [MOCK] Mensagem do erro:', error?.message);
      throw error;
    }
  },

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    // Simula delay da rede (800ms)
    await delay(800);

    // Buscar usuário no "banco mock"
    const user = mockUsers.find(
      u => 
        u.email === credentials.email.toLowerCase() && 
        u.password === credentials.password
    );

    if (!user) {
      throw new Error('Email ou senha incorretos.');
    }

    if (!user.isActive) {
      throw new Error('Usuário inativo. Entre em contato com o administrador.');
    }

    // Remover senha do objeto antes de retornar (segurança)
    const { password, ...userWithoutPassword } = user;

    // Gerar token mock (em produção seria JWT)
    const token = `mock_token_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;

    // Salvar no AsyncStorage (como se fosse uma API real)
    await AsyncStorage.setItem('@auth_token', token);
    await AsyncStorage.setItem('@user_data', JSON.stringify(userWithoutPassword));

    console.log('✅ [MOCK] Login realizado com sucesso:', userWithoutPassword.email);
    console.log('🔑 [MOCK] Token gerado:', token.substring(0, 20) + '...');

    return {
      user: userWithoutPassword,
      token,
    };
  },

  async getProfile(): Promise<User> {
    // Simula delay da rede
    await delay(500);

    const userData = await AsyncStorage.getItem('@user_data');
    if (!userData) {
      throw new Error('Usuário não autenticado.');
    }

    const user = JSON.parse(userData);
    console.log('✅ [MOCK] Perfil carregado:', user.email);
    return user;
  },

  async logout(): Promise<void> {
    // Simula delay da rede
    await delay(300);

    await AsyncStorage.removeItem('@auth_token');
    await AsyncStorage.removeItem('@user_data');
    console.log('✅ [MOCK] Logout realizado com sucesso');
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem('@auth_token');
    const isAuth = !!token;
    console.log('🔍 [MOCK] Verificação de autenticação:', isAuth ? 'Autenticado' : 'Não autenticado');
    return isAuth;
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem('@user_data');
      if (userData) {
        return JSON.parse(userData);
      }
      return null;
    } catch (error) {
      console.error('❌ [MOCK] Erro ao obter usuário:', error);
      return null;
    }
  },

  // Função auxiliar para limpar dados mock (útil para testes)
  clearMockData(): void {
    mockUsers.length = 0;
    console.log('🗑️ [MOCK] Dados mock limpos');
  },

  // Função auxiliar para ver usuários mock (útil para debug)
  getMockUsers(): User[] {
    return mockUsers.map(({ password, ...user }) => user);
  },
};
