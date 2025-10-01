import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type OccurrenceListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OccurrenceList'>;

interface Props {
  navigation: OccurrenceListScreenNavigationProp;
}

interface Occurrence {
  id: string;
  type: string;
  address: string;
  priority: string;
  status: string;
  date: string;
}

const OccurrenceListScreen: React.FC<Props> = ({ navigation }) => {
  const [occurrences] = useState<Occurrence[]>([
    {
      id: '1',
      type: 'Incêndio',
      address: 'Rua das Flores, 123',
      priority: 'Alta',
      status: 'Em Andamento',
      date: '2024-01-15 14:30',
    },
    {
      id: '2',
      type: 'Resgate',
      address: 'Av. Principal, 456',
      priority: 'Crítica',
      status: 'Concluída',
      date: '2024-01-15 12:15',
    },
    {
      id: '3',
      type: 'Emergência Médica',
      address: 'Praça Central',
      priority: 'Média',
      status: 'Pendente',
      date: '2024-01-15 10:45',
    },
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Crítica': return '#F44336';
      case 'Alta': return '#FF9800';
      case 'Média': return '#2196F3';
      case 'Baixa': return '#4CAF50';
      default: return '#9E9E9E';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída': return '#4CAF50';
      case 'Em Andamento': return '#FF9800';
      case 'Pendente': return '#2196F3';
      default: return '#9E9E9E';
    }
  };

  const renderOccurrence = ({ item }: { item: Occurrence }) => (
    <TouchableOpacity style={styles.occurrenceCard}>
      <View style={styles.occurrenceHeader}>
        <Text style={styles.occurrenceType}>{item.type}</Text>
        <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(item.priority) }]}>
          <Text style={styles.priorityText}>{item.priority}</Text>
        </View>
      </View>
      
      <Text style={styles.occurrenceAddress}>{item.address}</Text>
      
      <View style={styles.occurrenceFooter}>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Text style={styles.occurrenceDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Ocorrências</Text>
        <Text style={styles.subtitle}>Todas as ocorrências registradas</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{occurrences.length}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {occurrences.filter(o => o.status === 'Em Andamento').length}
            </Text>
            <Text style={styles.statLabel}>Ativas</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {occurrences.filter(o => o.status === 'Concluída').length}
            </Text>
            <Text style={styles.statLabel}>Concluídas</Text>
          </View>
        </View>

        <FlatList
          data={occurrences}
          renderItem={renderOccurrence}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#E53935',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: -20,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#E53935',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  listContainer: {
    paddingBottom: 20,
  },
  occurrenceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  occurrenceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  occurrenceType: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A202C',
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  occurrenceAddress: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  occurrenceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  occurrenceDate: {
    fontSize: 12,
    color: '#94A3B8',
  },
});

export default OccurrenceListScreen;