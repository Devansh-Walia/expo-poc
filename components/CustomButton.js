import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors/colors';

const CustomButton = ({
  onPress,
  title,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      android_ripple={{ color: colors.primary[400] }}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary[600],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    shadowColor: colors.neutral[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: colors.neutral[100],
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: colors.neutral[400],
    opacity: 0.7,
  },
});

export default CustomButton;
