import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useStore from '../store/userStore';

const WelcomeScreen = () => {
  const userName = useStore((state) => state.userName);

  return (
    <LinearGradient
      colors={['rgba(76, 102, 159, 0.9)', 'rgba(59, 89, 152, 0.9)', 'rgba(25, 47, 106, 0.9)']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.nameText}>{userName}!</Text>
        <Text style={styles.message}>We're glad to have you here.</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    color: '#4c669f',
    fontWeight: '600',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
