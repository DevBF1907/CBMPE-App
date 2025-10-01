import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { dashboardStyles } from '../../styles';

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const stats = [
    { label: 'Ocorrências Hoje', value: '12', color: '#E53935' },
    { label: 'Concluídas', value: '8', color: '#4CAF50' },
    { label: 'Em Andamento', value: '4', color: '#FF9800' },
  ];

  const quickActions = [
    {
      title: 'Nova Ocorrência',
      subtitle: 'Registrar nova ocorrência',
      icon: '📋',
      onPress: () => navigation.navigate('OccurrenceForm'),
      color: '#E53935',
    },
    {
      title: 'Lista de Ocorrências',
      subtitle: 'Visualizar todas as ocorrências',
      icon: '📝',
      onPress: () => navigation.navigate('OccurrenceList'),
      color: '#2196F3',
    },
    {
      title: 'Assinatura Digital',
      subtitle: 'Capturar assinatura',
      icon: '✍️',
      onPress: () => navigation.navigate('Signature', { occurrenceId: 'temp' }),
      color: '#FFD700',
    },
  ];

  return (
    <ScrollView style={dashboardStyles.container}>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.title}>Dashboard</Text>
        <Text style={dashboardStyles.subtitle}>Visão geral do sistema</Text>
      </View>

      <View style={dashboardStyles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={dashboardStyles.statCard}>
            <Text style={[dashboardStyles.statValue, { color: stat.color }]}>
              {stat.value}
            </Text>
            <Text style={dashboardStyles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={dashboardStyles.actionsContainer}>
        <Text style={dashboardStyles.sectionTitle}>Ações Rápidas</Text>
        {quickActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={[dashboardStyles.actionCard, { borderLeftColor: action.color }]}
            onPress={action.onPress}
          >
            <View style={dashboardStyles.actionContent}>
              <Text style={dashboardStyles.actionIcon}>{action.icon}</Text>
              <View style={dashboardStyles.actionText}>
                <Text style={dashboardStyles.actionTitle}>{action.title}</Text>
                <Text style={dashboardStyles.actionSubtitle}>{action.subtitle}</Text>
              </View>
            </View>
            <Text style={dashboardStyles.actionArrow}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={dashboardStyles.recentActivity}>
        <Text style={dashboardStyles.sectionTitle}>Atividade Recente</Text>
        <View style={dashboardStyles.activityCard}>
          <View style={dashboardStyles.activityItem}>
            <View style={[dashboardStyles.activityDot, { backgroundColor: '#4CAF50' }]} />
            <View style={dashboardStyles.activityContent}>
              <Text style={dashboardStyles.activityTitle}>Ocorrência #001 concluída</Text>
              <Text style={dashboardStyles.activityTime}>Há 2 horas</Text>
            </View>
          </View>
          <View style={dashboardStyles.activityItem}>
            <View style={[dashboardStyles.activityDot, { backgroundColor: '#FF9800' }]} />
            <View style={dashboardStyles.activityContent}>
              <Text style={dashboardStyles.activityTitle}>Nova ocorrência registrada</Text>
              <Text style={dashboardStyles.activityTime}>Há 4 horas</Text>
            </View>
          </View>
          <View style={dashboardStyles.activityItem}>
            <View style={[dashboardStyles.activityDot, { backgroundColor: '#2196F3' }]} />
            <View style={dashboardStyles.activityContent}>
              <Text style={dashboardStyles.activityTitle}>Assinatura digital capturada</Text>
              <Text style={dashboardStyles.activityTime}>Há 6 horas</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
