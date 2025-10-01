import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type OccurrenceFormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OccurrenceForm'>;

interface Props {
  navigation: OccurrenceFormScreenNavigationProp;
}

const OccurrenceFormScreen: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    type: '',
    address: '',
    description: '',
    priority: 'Média',
  });

  const handleSave = () => {
    if (!formData.type || !formData.address || !formData.description) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert('Sucesso', 'Ocorrência registrada com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nova Ocorrência</Text>
        <Text style={styles.subtitle}>Registre os dados da ocorrência</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formCard}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tipo de Ocorrência *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Incêndio, Resgate, Emergência Médica"
              value={formData.type}
              onChangeText={(text) => setFormData({ ...formData, type: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Endereço *</Text>
            <TextInput
              style={styles.input}
              placeholder="Endereço completo da ocorrência"
              value={formData.address}
              onChangeText={(text) => setFormData({ ...formData, address: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Prioridade</Text>
            <View style={styles.priorityContainer}>
              {['Baixa', 'Média', 'Alta', 'Crítica'].map((priority) => (
                <TouchableOpacity
                  key={priority}
                  style={[
                    styles.priorityButton,
                    formData.priority === priority && styles.priorityButtonSelected
                  ]}
                  onPress={() => setFormData({ ...formData, priority })}
                >
                  <Text style={[
                    styles.priorityText,
                    formData.priority === priority && styles.priorityTextSelected
                  ]}>
                    {priority}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Descrição *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descreva detalhadamente a ocorrência"
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar Ocorrência</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: -20,
    paddingBottom: 30,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#2D3748',
    minHeight: 48,
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  priorityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  priorityButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  priorityButtonSelected: {
    backgroundColor: '#E53935',
    borderColor: '#E53935',
  },
  priorityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  priorityTextSelected: {
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#E53935',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default OccurrenceFormScreen;