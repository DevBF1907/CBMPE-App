import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OccurrenceFormScreen = ({ navigation }: any) => {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <View style={styles.container}>
      <Text>Tipo de Ocorrência</Text>
      <TextInput
        style={styles.input}
        value={tipo}
        onChangeText={setTipo}
        placeholder="Ex: Incêndio"
      />
      <Text>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Detalhes da ocorrência"
        multiline
      />
      <Button
        title="Adicionar Assinatura"
        onPress={() => navigation.navigate('Assinatura')}
      />
      <Button
        title="Registrar Ocorrência"
        onPress={() => {
          // Aqui salvaríamos no AsyncStorage ou enviamos para backend depois
          alert('Ocorrência registrada (mock)');
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16 },
});

export default OccurrenceFormScreen;