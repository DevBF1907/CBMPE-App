# 🚒 CBMPE - Sistema de Gestão de Ocorrências

> **Aplicativo móvel profissional para o Corpo de Bombeiros Militar de Pernambuco**

[![React Native](https://img.shields.io/badge/React%20Native-0.81.4-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0.7-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.9.2-blue.svg)](https://www.typescriptlang.org/)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Pré-requisitos](#️-pré-requisitos)
- [Instalação Passo a Passo](#-instalação-passo-a-passo)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Sistema de Mock (Importante!)](#-sistema-de-mock-importante)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Arquitetura e Decisões Técnicas](#-arquitetura-e-decisões-técnicas)
- [Fluxo de Desenvolvimento](#-fluxo-de-desenvolvimento)
- [Troubleshooting](#-troubleshooting)
- [Como Contribuir](#-como-contribuir)
- [Tecnologias e Dependências](#-tecnologias-e-dependências)
- [Próximos Passos](#-próximos-passos)

---

## 🎯 Sobre o Projeto

O **CBMPE App** é um sistema completo de gestão de ocorrências desenvolvido especificamente para o Corpo de Bombeiros Militar de Pernambuco. O aplicativo permite que militares registrem, gerenciem e acompanhem ocorrências de forma eficiente e profissional diretamente de seus dispositivos móveis.

### 🎨 Características Principais

- ✅ **Interface moderna** e intuitiva seguindo design system do CBMPE
- ✅ **Design responsivo** para diferentes tamanhos de tela
- ✅ **Navegação fluida** entre telas
- ✅ **Componentes reutilizáveis** e modulares
- ✅ **Tipagem forte** com TypeScript
- ✅ **Estrutura escalável** e bem organizada
- ✅ **Sistema de Mock** para desenvolvimento sem backend
- ✅ **Offline-first** (preparado para funcionar offline)

### 📱 Plataformas Suportadas

- ✅ Android
- ✅ iOS
- ✅ Web (para testes)

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### 📋 Obrigatório

1. **Node.js** (versão 18 ou superior)
   - Download: [nodejs.org](https://nodejs.org/)
   - Verificar instalação: `node --version`

2. **npm** (vem com Node.js)
   - Verificar instalação: `npm --version`

3. **Git**
   - Download: [git-scm.com](https://git-scm.com/)
   - Verificar instalação: `git --version`

### 📱 Para Testar no Dispositivo

- **Expo Go** (Android/iOS)
  - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

### 💻 Para Desenvolvimento (Recomendado)

- **VS Code** ou outro editor de código
- **Extensões úteis para VS Code**:
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint

### 🖥️ Para Emuladores (Opcional)

- **Android Studio** (para emulador Android)
- **Xcode** (apenas macOS, para simulador iOS)

---

## 🚀 Instalação Passo a Passo

### 1. Clone o Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cbmpe-app.git

# Entre na pasta do projeto
cd cbmpe-app
```

### 2. Instale as Dependências

```bash
# Instalar todas as dependências
npm install

# OU usando yarn (se preferir)
yarn install
```

> ⏱️ **Tempo estimado**: 2-5 minutos (dependendo da conexão)

### 3. Verifique a Instalação

```bash
# Verificar se tudo está instalado corretamente
npx expo doctor
```

Se aparecer algum erro, siga as instruções que aparecerem no terminal.

### 4. Instale o Expo CLI Globalmente (Opcional)

```bash
npm install -g @expo/cli
```

---

## ▶️ Como Executar

### 🖥️ Modo Desenvolvimento (Terminal)

```bash
# Inicia o servidor de desenvolvimento
npm start

# OU
npx expo start
```

Isso irá abrir o Expo DevTools no navegador e mostrar um QR Code no terminal.

### 📱 Testando no Dispositivo Físico

#### **Opção 1: Expo Go (Recomendado para testes)**

1. Instale o app **Expo Go** no seu celular:
   - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Abra o terminal e execute:
   ```bash
   npm start
   ```

3. Escaneie o QR Code:
   - **Android**: Abra o app Expo Go e toque em "Scan QR Code"
   - **iOS**: Use a câmera do iPhone (ela detecta automaticamente)

4. Aguarde o app carregar (primeira vez pode demorar um pouco)

#### **Opção 2: Link Direto**

No terminal do Expo, pressione:
- `a` para abrir no Android
- `i` para abrir no iOS
- `w` para abrir no navegador

### 🖥️ Testando em Emulador/Simulador

```bash
# Para Android (precisa ter Android Studio instalado)
npm run android

# Para iOS (apenas no macOS, precisa ter Xcode)
npm run ios

# Para Web (navegador)
npm run web
```

### 🔄 Comandos Úteis Durante o Desenvolvimento

```bash
# Limpar cache e reiniciar
npx expo start --clear

# Reiniciar Metro Bundler
# Pressione 'r' no terminal do Expo

# Recarregar app
# Agite o dispositivo ou pressione 'r' no terminal
```

---

## 📂 Estrutura do Projeto

```
cbmpe-app/
├── 📂 src/
│   ├── 📂 assets/              # 🎨 Recursos estáticos
│   │   ├── 📂 images/          # Imagens
│   │   │   └── brasao.png      # Logo oficial do CBMPE
│   │   ├── 📂 icons/           # Ícones (futuro)
│   │   └── 📂 fonts/           # Fontes customizadas (futuro)
│   │
│   ├── 📂 components/          # 🧩 Componentes reutilizáveis
│   │   ├── 📂 common/          # Componentes comuns
│   │   │   ├── Button.tsx      # Botão customizado
│   │   │   ├── Input.tsx       # Input customizado
│   │   │   ├── Card.tsx        # Card component
│   │   │   ├── Loading.tsx     # Componente de loading
│   │   │   └── index.ts        # Exportações centralizadas
│   │   └── 📂 forms/           # Componentes de formulário (futuro)
│   │
│   ├── 📂 screens/             # 📱 Telas do aplicativo
│   │   ├── 📂 auth/            # Autenticação
│   │   │   ├── LoginScreen.tsx     # Tela de login
│   │   │   └── RegisterScreen.tsx  # Tela de cadastro
│   │   ├── 📂 dashboard/       # Dashboard principal
│   │   │   └── DashboardScreen.tsx # Tela inicial após login
│   │   ├── 📂 occurrences/     # Gestão de ocorrências
│   │   │   ├── OccurrenceFormScreen.tsx  # Formulário de nova ocorrência
│   │   │   ├── OccurrenceListScreen.tsx  # Lista de ocorrências
│   │   │   └── SignatureScreen.tsx       # Captura de assinatura
│   │   └── 📂 profile/         # Perfil do usuário (futuro)
│   │
│   ├── 📂 navigation/          # 🧭 Sistema de navegação
│   │   └── AppNavigator.tsx    # Configuração principal de navegação
│   │
│   ├── 📂 services/            # 🔌 Serviços e integrações
│   │   ├── 📂 api/             # Serviços de API
│   │   │   ├── config.ts              # Configuração do Axios
│   │   │   ├── authService.ts         # Serviço de autenticação
│   │   │   └── authService.mock.ts    # Mock do serviço de autenticação
│   │   └── 📂 storage/         # Serviços de armazenamento (futuro)
│   │
│   ├── 📂 styles/              # 🎨 Sistema de estilos
│   │   ├── authStyles.ts       # Estilos das telas de autenticação
│   │   ├── dashboardStyles.ts  # Estilos do dashboard
│   │   ├── occurrenceStyles.ts # Estilos das ocorrências
│   │   ├── signatureStyles.ts  # Estilos da assinatura
│   │   ├── globalStyles.ts     # Estilos globais
│   │   └── index.ts            # Exportações centralizadas
│   │
│   ├── 📂 types/               # 📝 Definições TypeScript
│   │   ├── auth.ts             # Tipos relacionados à autenticação
│   │   ├── occurrence.ts       # Tipos relacionados a ocorrências
│   │   ├── navigation.ts       # Tipos de navegação
│   │   └── index.ts            # Exportações centralizadas
│   │
│   └── 📂 utils/               # 🛠️ Utilitários e helpers
│       ├── 📂 constants/       # Constantes do projeto
│       │   ├── colors.ts       # Paleta de cores
│       │   ├── dimensions.ts   # Dimensões e espaçamentos
│       │   └── index.ts        # Exportações
│       ├── 📂 helpers/         # Funções auxiliares (futuro)
│       └── 📂 validation/      # Validações (futuro)
│
├── 📂 assets/                  # Assets do Expo (ícones, splash)
├── App.tsx                     # 🚀 Componente raiz da aplicação
├── index.ts                    # Ponto de entrada
├── package.json                # 📦 Dependências e scripts
├── app.json                    # ⚙️ Configuração do Expo
├── tsconfig.json               # 🔧 Configuração TypeScript
└── README.md                   # 📖 Este arquivo
```

### 📝 Explicação das Pastas Principais

#### `src/screens/`
Contém todas as telas do aplicativo. Cada tela é um componente React completo com sua própria lógica e estado.

#### `src/components/`
Componentes reutilizáveis que podem ser usados em várias telas. Componentes comuns como Button, Input, etc.

#### `src/services/api/`
Contém a lógica de comunicação com APIs. Atualmente está usando sistema mock, mas quando a API estiver pronta, basta alterar a configuração.

#### `src/styles/`
Sistema de estilos modular. Cada tela tem seu próprio arquivo de estilos para facilitar manutenção.

#### `src/types/`
Definições TypeScript para garantir tipagem forte em todo o projeto.

#### `src/navigation/`
Configuração de navegação entre telas usando React Navigation.

---

## 🔧 Sistema de Mock (Importante!)

### ⚠️ ATENÇÃO: O projeto está usando MOCK no momento!

O aplicativo está configurado para funcionar **sem backend/API** usando um sistema de mock. Isso permite testar todas as funcionalidades do frontend sem precisar de uma API rodando.

### 📍 Onde está configurado?

**Arquivo**: `src/services/api/authService.ts`

```typescript
// Linha 21
const USE_MOCK = true; // Mude para false quando tiver a API
```

### 🔄 Como funciona o Mock?

1. **Armazenamento em memória**: Os usuários cadastrados são armazenados em um array JavaScript (perdidos ao recarregar o app)

2. **Validações funcionam**: Email duplicado, senha mínima, etc.

3. **AsyncStorage**: Token e dados do usuário são salvos localmente (como se fosse uma API real)

4. **Delay simulado**: Simula delay de rede (800ms) para parecer real

### 🧪 Como testar com Mock?

1. **Cadastrar um usuário**:
   - Vá para a tela de Cadastro
   - Preencha os dados
   - Clique em "Cadastrar"
   - ✅ Usuário será salvo em memória

2. **Fazer login**:
   - Use o email e senha que você cadastrou
   - Clique em "Acessar Sistema"
   - ✅ Login funcionará normalmente

3. **Importante**: 
   - ⚠️ Os dados são perdidos ao recarregar o app (estão apenas em memória)
   - ⚠️ Você precisa cadastrar antes de fazer login
   - ⚠️ Cada vez que recarregar, precisa cadastrar novamente

### 🔄 Quando tiver a API pronta:

1. Abra `src/services/api/authService.ts`
2. Mude `USE_MOCK = false`
3. Descomente o código da API real (linhas 28-91)
4. Configure a URL da API em `src/services/api/config.ts`
5. Pronto! O app usará a API real

### 📝 Arquivos relacionados ao Mock:

- `src/services/api/authService.mock.ts` - Implementação do mock
- `src/services/api/authService.ts` - Serviço principal (usa mock ou API)
- `src/services/api/config.ts` - Configuração da API (não usado no mock)

---

## ✨ Funcionalidades Implementadas

### ✅ Autenticação

- [x] **Tela de Login**
  - Validação de campos
  - Feedback visual de loading
  - Tratamento de erros
  - Integração com sistema mock

- [x] **Tela de Cadastro**
  - Formulário completo com validações
  - Validação de email
  - Validação de senha (mínimo 6 caracteres)
  - Confirmação de senha
  - Campos: Nome, Email, Patente, Unidade, Senha

- [x] **Navegação entre Login e Cadastro**
  - Link para cadastro na tela de login
  - Link para login na tela de cadastro

### ✅ Dashboard

- [x] **Tela Principal**
  - Estatísticas (ocorrências hoje, concluídas, em andamento)
  - Ações rápidas
  - Atividade recente
  - Cards informativos

### ✅ Gestão de Ocorrências

- [x] **Formulário de Ocorrência**
  - Campos: Tipo, Endereço, Descrição, Prioridade
  - Validação de campos obrigatórios
  - Seleção de prioridade (Baixa, Média, Alta, Crítica)

- [x] **Lista de Ocorrências**
  - Visualização de ocorrências
  - Filtros por status e prioridade
  - Estatísticas gerais
  - Cards informativos

- [x] **Assinatura Digital**
  - Captura de assinatura em canvas
  - Validação de assinatura vazia
  - Salvamento de assinatura

### 🔄 Em Desenvolvimento

- [ ] Integração com API real
- [ ] Upload de imagens
- [ ] Geolocalização
- [ ] Notificações push
- [ ] Perfil do usuário
- [ ] Edição de ocorrências
- [ ] Filtros avançados
- [ ] Busca de ocorrências

---

## 🏗️ Arquitetura e Decisões Técnicas

### 🎯 Padrões Arquiteturais

#### 1. **Separação de Responsabilidades**
- Cada tela tem sua própria pasta
- Estilos separados por funcionalidade
- Serviços isolados em pastas específicas

#### 2. **Componentes Reutilizáveis**
- Componentes comuns em `src/components/common/`
- Fácil manutenção e reutilização
- Consistência visual

#### 3. **TypeScript para Tipagem Forte**
- Todos os arquivos são TypeScript
- Interfaces bem definidas
- Autocomplete e detecção de erros

#### 4. **Sistema de Estilos Modular**
- Estilos organizados por tela
- Cores e constantes centralizadas
- Fácil customização

### 🔐 Autenticação

#### Fluxo de Autenticação:

1. **Cadastro**:
   - Usuário preenche formulário
   - Dados são validados
   - Usuário é salvo (mock ou API)
   - Redireciona para login

2. **Login**:
   - Usuário insere email e senha
   - Credenciais são validadas
   - Token é gerado e salvo no AsyncStorage
   - Dados do usuário são salvos
   - Redireciona para Dashboard

3. **Persistência**:
   - Token salvo no AsyncStorage
   - Dados do usuário salvos localmente
   - Verificação de autenticação em cada sessão

### 📱 Navegação

#### Estrutura de Navegação:

```
Login
  └── Register (Cadastro)
  └── Dashboard (após login)
       └── OccurrenceForm (Nova Ocorrência)
       └── OccurrenceList (Lista de Ocorrências)
       └── Signature (Assinatura Digital)
```

#### Stack Navigator:

- Usa React Navigation Stack
- Headers customizados
- Navegação tipo pilha (stack)

### 🎨 Design System

#### Cores Oficiais CBMPE:

```typescript
primary: '#E53935'    // Vermelho CBMPE
secondary: '#FFD700'  // Dourado CBMPE
success: '#10B981'    // Verde
warning: '#F59E0B'    // Amarelo
error: '#EF4444'      // Vermelho erro
```

#### Espaçamentos Padronizados:

```typescript
xs: 4px   // Muito pequeno
sm: 8px   // Pequeno
md: 16px  // Médio
lg: 24px  // Grande
xl: 32px  // Muito grande
```

---

## 🔄 Fluxo de Desenvolvimento

### 📝 Criando uma Nova Tela

1. **Criar arquivo da tela**:
   ```bash
   # Exemplo: src/screens/profile/ProfileScreen.tsx
   ```

2. **Criar estilos**:
   ```bash
   # Exemplo: src/styles/profileStyles.ts
   ```

3. **Adicionar tipos** (se necessário):
   ```typescript
   // src/types/navigation.ts
   export type RootStackParamList = {
     // ... outros
     Profile: undefined;
   };
   ```

4. **Adicionar ao navegador**:
   ```typescript
   // src/navigation/AppNavigator.tsx
   import ProfileScreen from '../screens/profile/ProfileScreen';
   
   <Stack.Screen
     name="Profile"
     component={ProfileScreen}
     options={{ title: 'Perfil' }}
   />
   ```

### 🧩 Criando um Novo Componente

1. **Criar arquivo do componente**:
   ```bash
   # Exemplo: src/components/common/Modal.tsx
   ```

2. **Exportar no index**:
   ```typescript
   // src/components/common/index.ts
   export { default as Modal } from './Modal';
   ```

3. **Usar no componente**:
   ```typescript
   import { Modal } from '../components/common';
   ```

### 🔌 Criando um Novo Serviço

1. **Criar arquivo do serviço**:
   ```bash
   # Exemplo: src/services/api/occurrenceService.ts
   ```

2. **Implementar métodos**:
   ```typescript
   export const occurrenceService = {
     async getAll() { ... },
     async getById(id: string) { ... },
     // ...
   };
   ```

3. **Usar no componente**:
```typescript
   import { occurrenceService } from '../services/api/occurrenceService';
   ```

---

## 🐛 Troubleshooting

### ❌ Problemas Comuns e Soluções

#### 1. **Erro ao instalar dependências**

```bash
# Limpar cache do npm
npm cache clean --force

# Deletar node_modules e package-lock.json
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

#### 2. **App não carrega no dispositivo**

- Verifique se o dispositivo e computador estão na mesma rede Wi-Fi
- Tente usar o modo "Tunnel" no Expo:
  ```bash
  npx expo start --tunnel
  ```

#### 3. **Erro de tipos TypeScript**

```bash
# Verificar tipos
npx tsc --noEmit

# Reinstalar tipos
npm install --save-dev @types/react @types/react-native
```

#### 4. **Metro Bundler travado**

```bash
# Limpar cache
npx expo start --clear

# Ou fechar e reiniciar
# Ctrl+C para parar
# npm start para iniciar novamente
```

#### 5. **Erro "Unable to resolve module"**

```bash
# Limpar cache e reinstalar
rm -rf node_modules
npm install
npx expo start --clear
```

#### 6. **App não reconhece mudanças no código**

- Pressione `r` no terminal do Expo para recarregar
- Ou agite o dispositivo e toque em "Reload"

#### 7. **Erro ao cadastrar usuário (Mock)**

- Verifique o console para ver os logs
- Certifique-se de preencher todos os campos
- Email deve ser válido
- Senha deve ter no mínimo 6 caracteres
- Senhas devem coincidir

#### 8. **Login não funciona (Mock)**

- Certifique-se de ter cadastrado um usuário primeiro
- Use o mesmo email e senha do cadastro
- Verifique o console para logs de erro

---

## 🤝 Como Contribuir

### 📋 Checklist antes de contribuir

- [ ] Fork do projeto
- [ ] Criação de branch (`git checkout -b feature/MinhaFeature`)
- [ ] Commit das mudanças (`git commit -m 'Adiciona MinhaFeature'`)
- [ ] Push para a branch (`git push origin feature/MinhaFeature`)
- [ ] Abertura de Pull Request

### 📝 Padrões de Código

#### **Nomenclatura**

```typescript
// ✅ Componentes: PascalCase
const LoginScreen = () => { ... }

// ✅ Funções: camelCase
const handleLogin = () => { ... }

// ✅ Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'

// ✅ Arquivos: PascalCase para componentes, camelCase para utilitários
LoginScreen.tsx
authService.ts
```

#### **Imports Organizados**

```typescript
// 1. React e bibliotecas externas
import React from 'react';
import { View, Text } from 'react-native';

// 2. Componentes internos
import { Button, Input } from '../components/common';

// 3. Tipos e interfaces
import { User, LoginCredentials } from '../types';

// 4. Utilitários e constantes
import { Colors, Spacing } from '../utils/constants';

// 5. Estilos
import { authStyles } from '../styles';
```

#### **Estrutura de Componente**

```typescript
// 1. Imports
import React from 'react';

// 2. Tipos e interfaces
interface Props {
  // ...
}

// 3. Componente
const MyComponent: React.FC<Props> = ({ ... }) => {
  // 4. Estados
  const [state, setState] = useState();
  
  // 5. Efeitos
  useEffect(() => { ... }, []);
  
  // 6. Funções
  const handleClick = () => { ... };
  
  // 7. Render
  return (
    // ...
  );
};

// 8. Estilos
const styles = StyleSheet.create({ ... });

// 9. Export
export default MyComponent;
```

### 🐛 Reportando Bugs

Use este template:

```markdown
## 🐛 Bug Report

**Descrição**: 
Breve descrição do bug

**Passos para Reproduzir**:
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado**: 
O que deveria acontecer

**Comportamento Atual**: 
O que está acontecendo

**Screenshots**: 
Se aplicável, adicione screenshots

**Ambiente**:
- OS: [ex: iOS 16, Android 12]
- Expo: [ex: ~54.0.7]
- Dispositivo: [ex: iPhone 14, Samsung Galaxy S22]
- Versão do Node: [ex: v18.17.0]

**Logs**:
Cole os logs do console aqui
```

### ✨ Sugerindo Funcionalidades

```markdown
## ✨ Feature Request

**Funcionalidade**: 
Descrição da funcionalidade

**Problema que Resolve**: 
Por que é necessária?

**Solução Proposta**: 
Como implementar?

**Alternativas**: 
Outras opções consideradas
```

---

## 🛠️ Tecnologias e Dependências

### 📦 Principais Dependências

#### **Core**
- **React Native** `0.81.4` - Framework mobile
- **React** `19.1.0` - Biblioteca JavaScript
- **Expo** `~54.0.7` - Plataforma de desenvolvimento
- **TypeScript** `~5.9.2` - Tipagem estática

#### **Navegação**
- **@react-navigation/native** `^7.1.17` - Navegação principal
- **@react-navigation/stack** `^7.4.8` - Navegação tipo pilha

#### **Armazenamento**
- **@react-native-async-storage/async-storage** `^2.2.0` - Armazenamento local

#### **HTTP**
- **axios** `^1.13.2` - Cliente HTTP (para quando tiver API)

#### **UI/UX**
- **@expo/vector-icons** `^15.0.2` - Ícones
- **expo-linear-gradient** `^15.0.7` - Gradientes
- **react-native-signature-canvas** `^5.0.1` - Canvas para assinatura

#### **Funcionalidades (Futuro)**
- **expo-camera** `~17.0.8` - Câmera
- **expo-image-picker** `^17.0.8` - Seletor de imagens
- **expo-location** `^19.0.7` - Geolocalização
- **react-native-maps** `^1.26.0` - Mapas
- **firebase** `^12.2.1` - Firebase (futuro)

### 🔧 DevDependencies

- **@types/react** `~19.1.0` - Tipos do React
- **@types/react-native** `^0.72.8` - Tipos do React Native
- **typescript** `~5.9.2` - Compilador TypeScript

---

## 🚀 Próximos Passos

### 📋 Roadmap

#### **Fase 1: Fundação** ✅ (Concluído)
- [x] Estrutura do projeto
- [x] Sistema de navegação
- [x] Telas de autenticação
- [x] Sistema de mock
- [x] Dashboard básico

#### **Fase 2: Funcionalidades Core** 🔄 (Em Progresso)
- [ ] Integração com API real
- [ ] CRUD completo de ocorrências
- [ ] Upload de imagens
- [ ] Geolocalização
- [ ] Filtros e busca

#### **Fase 3: Melhorias de UX** 📅 (Planejado)
- [ ] Notificações push
- [ ] Modo offline
- [ ] Sincronização de dados
- [ ] Animações e transições
- [ ] Dark mode

#### **Fase 4: Funcionalidades Avançadas** 📅 (Futuro)
- [ ] Relatórios e estatísticas
- [ ] Exportação de dados
- [ ] Compartilhamento
- [ ] Integração com mapas
- [ ] Chat/Mensagens

### 🎯 Prioridades Imediatas

1. **Integração com API** (quando backend estiver pronto)
2. **Upload de imagens** nas ocorrências
3. **Geolocalização** automática
4. **Filtros avançados** na lista de ocorrências
5. **Validações** mais robustas

---

## 📞 Contato e Suporte

### 👥 Equipe de Desenvolvimento

- **Desenvolvedor Principal**: [Seu Nome]
- **Email**: [seu.email@exemplo.com]
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

### 🏢 CBMPE

- **Site**: [www.cbmpe.pe.gov.br](https://www.cbmpe.pe.gov.br)
- **Email**: [contato@cbmpe.pe.gov.br](mailto:contato@cbmpe.pe.gov.br)

### 🆘 Precisa de Ajuda?

1. Verifique a seção [Troubleshooting](#-troubleshooting)
2. Consulte os logs do console
3. Verifique a documentação do [Expo](https://docs.expo.dev/)
4. Abra uma issue no GitHub
5. Entre em contato com a equipe

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **CBMPE** - Por confiar no projeto
- **React Native Community** - Pela excelente documentação
- **Expo Team** - Pela plataforma incrível
- **Todos os contribuidores** - Por ajudar a melhorar o projeto

---

<div align="center">

**Desenvolvido com ❤️ para o CBMPE**

🚒 **Corpo de Bombeiros Militar de Pernambuco** 🚒

---



</div>
