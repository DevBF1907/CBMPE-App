import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors, Spacing, FontSizes } from '../../utils/constants';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Carregando...',
  size = 'large',
  color = Colors.primary,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  message: {
    marginTop: Spacing.md,
    fontSize: FontSizes.md,
    color: Colors.gray[600],
    textAlign: 'center',
  },
});

export default Loading;
