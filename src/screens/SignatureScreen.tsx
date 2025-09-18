import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';

const SignatureScreen = ({ navigation, route }: any) => {
  const ref = useRef<any>(null);

  const handleOK = (signature: string) => {
    console.log("Assinatura Base64:", signature);
    
    // Aqui você pode salvar a assinatura e retornar para a tela anterior
    if (route.params?.onSaveSignature) {
      route.params.onSaveSignature(signature);
    }
    
    Alert.alert('Sucesso', 'Assinatura salva com sucesso!');
    navigation.goBack();
  };

  const handleEmpty = () => {
    Alert.alert('Atenção', 'Por favor, faça sua assinatura antes de salvar.');
  };

  const handleClear = () => {
    ref.current?.clearSignature();
  };

  const handleSave = () => {
    ref.current?.readSignature();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Assinatura Digital</Text>
        <Text style={styles.subtitle}>Assine no quadro abaixo</Text>
      </View>

      <View style={styles.signatureContainer}>
        <SignatureCanvas
          ref={ref}
          onOK={handleOK}
          onEmpty={handleEmpty}
          descriptionText=""
          clearText=""
          confirmText=""
          webStyle={style}
          autoClear={false}
          penColor="#000"
          backgroundColor="#fff"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Assinatura</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.cancelButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = `
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .m-signature-pad {
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px dashed #ccc;
    border-radius: 8px;
  }
  .m-signature-pad--body {
    border: none;
  }
  .m-signature-pad--footer {
    display: none;
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  signatureContainer: {
    flex: 1,
    height: 300,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 10,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    flex: 2,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignatureScreen;