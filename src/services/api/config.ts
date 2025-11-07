import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// URL base da API NestJS
// Para desenvolvimento local, use o IP da sua máquina na rede
// Você pode descobrir o IP com: ipconfig (Windows) ou ifconfig (Mac/Linux)
// IMPORTANTE: Altere este IP para o IP da sua máquina na rede local
const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3000/api' // Para emulador Android/iOS usar localhost
  // ? 'http://192.168.1.100:3000/api' // Para dispositivo físico, use o IP da sua máquina
  : 'https://sua-api-producao.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de requisições - adiciona token de autenticação
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respostas - trata erros de autenticação
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token inválido ou expirado
      await AsyncStorage.removeItem('@auth_token');
      await AsyncStorage.removeItem('@user_data');
      // Você pode usar um contexto ou evento para redirecionar para login
    }
    return Promise.reject(error);
  }
);

export default api;
