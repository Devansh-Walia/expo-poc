import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useStore from '../store/userStore';
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const userName = useStore((state) => state.userName);

  return (
    <LinearGradient
      colors={[colors.primary[500], colors.secondary[500], colors.blue[800]]}
      style={styles.container}
    >
      <View style={styles.content}>
        <AntDesign name="star" size={50} color={colors.primary[500]} style={styles.icon} />
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.nameText}>{userName}!</Text>
        <Text style={styles.message}>We're glad to have you here.</Text>
        <AntDesign name="heart" size={40} color={colors.secondary[500]} style={styles.icon} />
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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  welcomeText: {
    fontSize: 36,
    color: colors.primary[700],
    marginBottom: 10,
    fontFamily: 'Pacifico',
  },
  nameText: {
    fontSize: 28,
    color: colors.secondary[700],
    marginBottom: 15,
    fontFamily: 'Pacifico',
  },
  message: {
    fontSize: 18,
    color: colors.neutral[700],
    textAlign: 'center',
    fontFamily: 'Pacifico',
  },
  icon: {
    marginVertical: 10,
  },
});

export default WelcomeScreen;
