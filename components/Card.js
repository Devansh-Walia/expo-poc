import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import useStore from '../store/userStore';

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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    elevation: 6,
    shadowColor: '#000',
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
    color: '#1a1a1a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
  },
});

export default Card;
