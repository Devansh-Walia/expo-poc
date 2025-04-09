import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useStore from '../store/userStore';
import { colors } from '../constants/colors';

const WelcomeScreen = () => {
  const userName = useStore((state) => state.userName);

  return (
    <LinearGradient
      colors={[colors.primary[500], colors.secondary[500], colors.blue[800]]}
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
    backgroundColor: colors.neutral[50],
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.neutral[800],
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    color: colors.primary[600],
    fontWeight: '600',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: colors.neutral[600],
    textAlign: 'center',
  },
});

export default WelcomeScreen;
