import React, { forwardRef } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, Spacing, BorderRadius, FontSizes } from '../../utils/constants';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  error?: string;
  disabled?: boolean;
  icon?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  autoComplete?: 'email' | 'password' | 'off';
  returnKeyType?: 'done' | 'next' | 'search' | 'send';
  onSubmitEditing?: () => void;
}

const Input = forwardRef<TextInput, InputProps>(({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  error,
  disabled = false,
  icon,
  style,
  inputStyle,
  autoCapitalize = 'sentences',
  autoCorrect = true,
  autoComplete = 'off',
  returnKeyType = 'done',
  onSubmitEditing,
}, ref) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, error && styles.inputError]}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <TextInput
          ref={ref}
          style={[
            styles.input,
            multiline && styles.multilineInput,
            disabled && styles.disabledInput,
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray[400]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={!disabled}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={!multiline}
          textContentType={secureTextEntry ? 'password' : keyboardType === 'email-address' ? 'emailAddress' : 'none'}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.gray[700],
    marginBottom: Spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    borderColor: Colors.gray[200],
    paddingHorizontal: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputError: {
    borderColor: Colors.error,
  },
  icon: {
    fontSize: FontSizes.md,
    color: Colors.gray[500],
    marginRight: Spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: FontSizes.md,
    color: Colors.gray[900],
    paddingVertical: Spacing.md,
    minHeight: 48,
    textAlignVertical: 'center',
  },
  multilineInput: {
    textAlignVertical: 'top',
    minHeight: 80,
  },
  disabledInput: {
    backgroundColor: Colors.gray[100],
    color: Colors.gray[500],
  },
  errorText: {
    fontSize: FontSizes.xs,
    color: Colors.error,
    marginTop: Spacing.xs,
  },
});

Input.displayName = 'Input';

export default Input;
