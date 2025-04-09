import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import useStore from '../store/userStore';
import { colors } from '../constants/colors';

const Card = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const setUserName = useStore((state) => state.setUserName);

  const handleSubmit = () => {
    if (inputText.trim()) {
      setUserName(inputText.trim());
      navigation.navigate('Welcome');
    } else {
      alert('Please enter your name');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={inputText}
        onChangeText={setInputText}
      />
      <Text style={styles.description}>
        {inputText ? `Hello, ${inputText}!` : 'Please enter your name above'}
      </Text>
      <CustomButton 
        title="Submit"
        onPress={handleSubmit}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.neutral[50],
    borderRadius: 12,
    padding: 20,
    width: '85%',
    elevation: 6,
    shadowColor: colors.neutral[900],
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: colors.neutral[800],
  },
  input: {
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: colors.neutral[600],
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
  },
});

export default Card;
