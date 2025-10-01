export interface User {
  id: string;
  email: string;
  name: string;
  rank: string;
  unit: string;
  isActive: boolean;
  createdAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
