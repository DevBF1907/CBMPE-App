import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const OccurrenceFormScreen = ({ navigation }: any) => {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🚒 Nova Ocorrência</Text>
        <Text style={styles.headerSubtitle}>Preencha os detalhes abaixo</Text>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <Text style={styles.label}>Tipo de Ocorrência</Text>
        <TextInput
          style={styles.input}
          value={tipo}
          onChangeText={setTipo}
          placeholder="Ex: Incêndio"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Detalhes da ocorrência"
          placeholderTextColor="#999"
          multiline
        />

        {/* Botão para adicionar assinatura */}
        <TouchableOpacity
          style={styles.signatureButton}
          onPress={() => navigation.navigate('Assinatura')}
        >
          <Text style={styles.signatureButtonText}>✍️ Adicionar Assinatura</Text>
        </TouchableOpacity>

        {/* Botão para registrar ocorrência */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            alert('Ocorrência registrada (mock)');
            navigation.goBack();
          }}
        >
          <Text style={styles.submitButtonText}>🚨 Registrar Ocorrência</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { padding: 20, backgroundColor: '#B22222', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
  headerTitle: { color: '#FFF', fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  headerSubtitle: { color: '#FFD700', fontSize: 16 },
  form: { padding: 20 },
  label: { color: '#B22222', fontWeight: '600', marginBottom: 5, fontSize: 16 },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  signatureButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  signatureButtonText: {
    color: '#B22222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#CC0000',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OccurrenceFormScreen;
