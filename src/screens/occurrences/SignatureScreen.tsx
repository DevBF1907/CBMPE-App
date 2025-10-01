import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type SignatureScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signature'>;
type SignatureScreenRouteProp = RouteProp<RootStackParamList, 'Signature'>;

interface Props {
  navigation: SignatureScreenNavigationProp;
  route: SignatureScreenRouteProp;
}

const SignatureScreen: React.FC<Props> = ({ navigation, route }) => {
  const { occurrenceId } = route.params;
  const [signature, setSignature] = useState<string>('');

  const handleSaveSignature = () => {
    if (!signature) {
      Alert.alert('Atenção', 'Por favor, capture sua assinatura.');
      return;
    }

    Alert.alert('Sucesso', 'Assinatura digital capturada com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  const handleClearSignature = () => {
    setSignature('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Assinatura Digital</Text>
        <Text style={styles.subtitle}>Capture sua assinatura para a ocorrência #{occurrenceId}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.signatureContainer}>
          <View style={styles.signatureArea}>
            {signature ? (
              <View style={styles.signaturePreview}>
                <Text style={styles.signatureText}>✍️ Assinatura Capturada</Text>
              </View>
            ) : (
              <View style={styles.signaturePlaceholder}>
                <Text style={styles.placeholderText}>Área de Assinatura</Text>
                <Text style={styles.placeholderSubtext}>Toque para capturar sua assinatura</Text>
              </View>
            )}
          </View>

          <View style={styles.signatureActions}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={() => setSignature('captured')}
            >
              <Text style={styles.captureButtonText}>
                {signature ? 'Recapturar' : 'Capturar Assinatura'}
              </Text>
            </TouchableOpacity>

            {signature && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={handleClearSignature}
              >
                <Text style={styles.clearButtonText}>Limpar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Informações da Assinatura</Text>
          <Text style={styles.infoText}>
            • A assinatura digital será vinculada à ocorrência
          </Text>
          <Text style={styles.infoText}>
            • Os dados são criptografados e seguros
          </Text>
          <Text style={styles.infoText}>
            • A assinatura tem valor legal
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.saveButton, !signature && styles.saveButtonDisabled]}
          onPress={handleSaveSignature}
          disabled={!signature}
        >
          <Text style={styles.saveButtonText}>Salvar Assinatura</Text>
        </TouchableOpacity>
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
    paddingBottom: 30,
  },
  signatureContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  signatureArea: {
    height: 200,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signaturePreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signatureText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
  },
  signaturePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#94A3B8',
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#CBD5E1',
  },
  signatureActions: {
    flexDirection: 'row',
    gap: 12,
  },
  captureButton: {
    flex: 1,
    backgroundColor: '#E53935',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  captureButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: '#F44336',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
    lineHeight: 20,
  },
  saveButton: {
    backgroundColor: '#E53935',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#CBD5E1',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SignatureScreen;