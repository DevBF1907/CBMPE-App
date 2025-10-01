# 🚒 CBMPE - Sistema de Gestão de Ocorrências

> **Aplicativo profissional para o Corpo de Bombeiros Militar de Pernambuco**

[![React Native](https://img.shields.io/badge/React%20Native-0.81.4-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0.7-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.9.2-blue.svg)](https://www.typescriptlang.org/)

## 📋 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Como Contribuir](#-como-contribuir)
- [Tecnologias](#-tecnologias)
- [Contato](#-contato)

## 🎯 Sobre o Projeto

O **CBMPE App** é um sistema completo de gestão de ocorrências desenvolvido especificamente para o Corpo de Bombeiros Militar de Pernambuco. O aplicativo permite que militares registrem, gerenciem e acompanhem ocorrências de forma eficiente e profissional.

### 🎨 Características Principais
- **Interface moderna** e intuitiva
- **Design responsivo** para diferentes dispositivos
- **Navegação fluida** entre telas
- **Componentes reutilizáveis** e modulares
- **Tipagem forte** com TypeScript
- **Estrutura escalável** e bem organizada

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### 📱 Para Desenvolvimento Mobile
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Expo CLI**: `npm install -g @expo/cli`
- **Git** para controle de versão

### 📲 Para Testar no Dispositivo
- **Expo Go** (Android/iOS)
  - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

### 💻 Para Desenvolvimento
- **VS Code** (recomendado)
- **Extensões úteis**:
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint

## 🚀 Instalação

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/cbmpe-app.git
cd cbmpe-app
```

### 2. Instale as Dependências
```bash
npm install
# ou
yarn install
```

### 3. Verifique a Instalação
```bash
npx expo doctor
```

## ▶️ Como Executar

### 🖥️ Modo Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento
npx expo start

# Ou com yarn
yarn expo start
```

### 📱 Testando no Dispositivo

#### **Opção 1: Expo Go (Recomendado para testes)**
1. Abra o terminal e execute `npx expo start`
2. Escaneie o QR Code com:
   - **Android**: App Expo Go
   - **iOS**: Câmera do iPhone
3. O app será carregado automaticamente

#### **Opção 2: Emulador/Simulador**
```bash
# Para Android
npx expo start --android

# Para iOS (apenas no macOS)
npx expo start --ios
```

### 🌐 Modo Web (Desenvolvimento)
```bash
npx expo start --web
```

## 📂 Estrutura do Projeto

```
📦 cbmpe-app/
├── 📂 src/
│   ├── 📂 styles/            # 🎨 Sistema de Estilos Organizados
│   │   ├── authStyles.ts     # Estilos da tela de login
│   │   ├── dashboardStyles.ts # Estilos do dashboard
│   │   ├── occurrenceStyles.ts # Estilos das ocorrências
│   │   ├── signatureStyles.ts # Estilos da assinatura
│   │   ├── globalStyles.ts   # Estilos globais e constantes
│   │   └── index.ts          # Exportações centralizadas
│   │
│   ├── 📂 screens/           # 📱 Telas do Aplicativo
│   │   ├── 📂 auth/         # Tela de Login profissional
│   │   │   └── LoginScreen.tsx
│   │   ├── 📂 dashboard/    # Dashboard com estatísticas
│   │   │   └── DashboardScreen.tsx
│   │   ├── 📂 occurrences/  # Telas de Ocorrências
│   │   │   ├── OccurrenceFormScreen.tsx
│   │   │   ├── OccurrenceListScreen.tsx
│   │   │   └── SignatureScreen.tsx
│   │   └── 📂 profile/      # Perfil do Usuário (futuro)
│   │
│   ├── 📂 navigation/        # 🧭 Navegação
│   │   └── AppNavigator.tsx # Configuração de navegação
│   │
│   ├── 📂 types/            # 📝 Definições TypeScript
│   │   ├── auth.ts          # Tipos de autenticação
│   │   ├── occurrence.ts    # Tipos de ocorrências
│   │   ├── navigation.ts    # Tipos de navegação
│   │   └── index.ts         # Exportações dos tipos
│   │
│   ├── 📂 utils/            # 🛠️ Utilitários
│   │   └── 📂 constants/    # Constantes (legado)
│   │       ├── colors.ts    # Paleta de cores
│   │       ├── dimensions.ts # Dimensões e espaçamentos
│   │       └── index.ts     # Re-exportações
│   │
│   └── 📂 assets/           # 🎨 Recursos
│       └── 📂 images/       # Imagens (logo CBMPE)
│           └── brasao.png   # Logo oficial
│
├── App.tsx                   # 🚀 Arquivo Principal
├── package.json             # 📦 Dependências
├── app.json                 # ⚙️ Configuração do Expo
├── tsconfig.json            # 🔧 Configuração TypeScript
└── README.md                # 📖 Este arquivo
```

## 🎨 Sistema de Estilos

O projeto utiliza uma **arquitetura de estilos modular** e bem organizada:

### 📁 **Estrutura de Estilos**
```
src/styles/
├── 🎨 globalStyles.ts      # Cores, constantes e estilos globais
├── 🔐 authStyles.ts        # Estilos da tela de login
├── 📊 dashboardStyles.ts   # Estilos do dashboard
├── 📝 occurrenceStyles.ts  # Estilos das ocorrências
├── ✍️ signatureStyles.ts   # Estilos da assinatura
└── 📦 index.ts             # Exportações centralizadas
```

### 🎯 **Benefícios da Organização**
- **Separação de responsabilidades** por tela
- **Reutilização** de estilos globais
- **Manutenibilidade** facilitada
- **Consistência** visual garantida
- **Performance** otimizada

### 🎨 **Sistema de Design**
```typescript
// Cores oficiais do CBMPE
Colors.primary = '#E53935'    // Vermelho CBMPE
Colors.secondary = '#FFD700'  // Dourado CBMPE

// Espaçamentos consistentes
Spacing.xs = 4px, sm = 8px, md = 16px, lg = 24px, xl = 32px

// Bordas padronizadas
BorderRadius.sm = 4px, md = 8px, lg = 12px, xl = 16px, xxl = 24px
```

### 💡 **Como Usar**
```typescript
// Importar estilos específicos
import { authStyles } from '../../styles';

// Usar estilos globais
import { Colors, Spacing, globalStyles } from '../../styles';

// Aplicar nos componentes
<View style={authStyles.container}>
  <Text style={globalStyles.headerTitle}>Título</Text>
</View>
```

## 🎯 Funcionalidades

### 🔐 **Autenticação**
- Login seguro com credenciais institucionais
- Interface profissional com logo oficial do CBMPE
- Validação de campos em tempo real
- Feedback visual de carregamento

### 📊 **Dashboard**
- Estatísticas em tempo real
- Ações rápidas para navegação
- Atividade recente
- Cards informativos

### 📋 **Gestão de Ocorrências**
- **Registro**: Formulário completo com validação
- **Lista**: Visualização organizada com filtros
- **Detalhes**: Informações completas da ocorrência
- **Status**: Acompanhamento do progresso

### ✍️ **Assinatura Digital**
- Captura de assinatura
- Validação e salvamento
- Integração com ocorrências

### 🎨 **Interface**
- Design responsivo
- Cores oficiais do CBMPE
- Componentes reutilizáveis
- Animações suaves

## 🤝 Como Contribuir

### 📋 **Fluxo de Contribuição**

1. **Fork** o projeto
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/cbmpe-app.git`
3. **Crie** uma branch: `git checkout -b feature/nova-funcionalidade`
4. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
5. **Push** para a branch: `git push origin feature/nova-funcionalidade`
6. **Abra** um Pull Request

### 🛠️ **Padrões de Código**

#### **Estrutura de Arquivos**
```typescript
// ✅ Bom
src/screens/auth/LoginScreen.tsx

// ❌ Evitar
src/screens/LoginScreen.tsx
```

#### **Nomenclatura**
```typescript
// ✅ Componentes: PascalCase
const LoginScreen = () => { ... }

// ✅ Funções: camelCase
const handleLogin = () => { ... }

// ✅ Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.cbmpe.pe.gov.br'
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
```

### 🐛 **Reportando Bugs**

Use o template abaixo:

```markdown
## 🐛 Bug Report

**Descrição**: Breve descrição do bug

**Passos para Reproduzir**:
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado**: O que deveria acontecer

**Screenshots**: Se aplicável

**Ambiente**:
- OS: [ex: iOS 16, Android 12]
- Expo: [ex: 49.0.0]
- Dispositivo: [ex: iPhone 14, Samsung Galaxy S22]
```

### ✨ **Sugerindo Funcionalidades**

```markdown
## ✨ Feature Request

**Funcionalidade**: Descrição da funcionalidade

**Problema que Resolve**: Por que é necessária?

**Solução Proposta**: Como implementar?

**Alternativas**: Outras opções consideradas
```

## 🛠️ Tecnologias

### **Frontend**
- **React Native** 0.81.4 - Framework mobile
- **Expo** ~54.0.7 - Plataforma de desenvolvimento
- **TypeScript** ~5.9.2 - Tipagem estática
- **React Navigation** 7.x - Navegação

### **UI/UX & Estilos**
- **Design System** modular e organizado
- **Arquitetura de Estilos** separada por telas
- **Cores Oficiais** do CBMPE (vermelho e dourado)
- **Componentes Nativos** otimizados
- **Responsive Design** para diferentes telas
- **Sistema de Constantes** centralizado

### **Arquitetura**
- **Separação de Responsabilidades** por módulos
- **Estilos Modulares** (`authStyles`, `dashboardStyles`, etc.)
- **Tipagem Forte** com TypeScript
- **Estrutura Escalável** e bem organizada

### **Desenvolvimento**
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Git** - Controle de versão
- **Expo CLI** - Ferramentas de desenvolvimento

## 🚀 Melhorias Implementadas

### ✨ **Refatoração de Estilos**
- **Separação modular** dos estilos por tela
- **Sistema de design** centralizado e consistente
- **Cores oficiais** do CBMPE implementadas
- **Componentes nativos** otimizados para performance
- **Arquitetura escalável** para futuras expansões

### 🎯 **Benefícios Alcançados**
- **Manutenibilidade** - Estilos organizados e fáceis de encontrar
- **Consistência** - Design uniforme em todas as telas
- **Performance** - Componentes nativos mais rápidos
- **Escalabilidade** - Estrutura preparada para crescimento
- **Colaboração** - Código mais limpo para trabalho em equipe

### 📊 **Estrutura Atual**
```
✅ LoginScreen - Interface profissional com logo CBMPE
✅ DashboardScreen - Estatísticas e ações rápidas
✅ OccurrenceFormScreen - Formulário completo de ocorrências
✅ OccurrenceListScreen - Lista com filtros e estatísticas
✅ SignatureScreen - Captura de assinatura digital
✅ Sistema de Navegação - Fluxo completo entre telas
```

## 📱 Comandos Úteis

```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npx expo start

# Limpar cache
npx expo start --clear

# Build para produção
npx expo build:android
npx expo build:ios

# Verificar problemas
npx expo doctor

# Atualizar Expo
npx expo install --fix
```

## 🎨 Design System

### **Cores Oficiais CBMPE**
```typescript
const Colors = {
  primary: '#E53935',      // Vermelho principal
  secondary: '#FFD700',    // Dourado
  success: '#10B981',      // Verde
  warning: '#F59E0B',      // Amarelo
  error: '#EF4444',        // Vermelho erro
}
```

### **Espaçamentos**
```typescript
const Spacing = {
  xs: 4,    // Muito pequeno
  sm: 8,    // Pequeno
  md: 16,   // Médio
  lg: 24,   // Grande
  xl: 32,   // Muito grande
}
```

## 📞 Contato

### **Desenvolvedor Principal**
- **Nome**: [Seu Nome]
- **Email**: [seu.email@exemplo.com]
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

### **CBMPE**
- **Site**: [www.cbmpe.pe.gov.br](https://www.cbmpe.pe.gov.br)
- **Email**: [contato@cbmpe.pe.gov.br](mailto:contato@cbmpe.pe.gov.br)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🚀 Quick Start para Novos Contribuidores

```bash
# 1. Clone o projeto
git clone https://github.com/seu-usuario/cbmpe-app.git
cd cbmpe-app

# 2. Instale dependências
npm install

# 3. Inicie o projeto
npx expo start

# 4. Escaneie o QR Code com Expo Go
# 5. Comece a desenvolver! 🎉
```

**Dica**: Comece explorando a pasta `src/screens/auth/LoginScreen.tsx` para entender a estrutura!

---

<div align="center">
  <p>Desenvolvido com ❤️ para o <strong>CBMPE</strong></p>
  <p>🚒 Corpo de Bombeiros Militar de Pernambuco 🚒</p>
</div>