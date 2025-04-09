import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors/colors';
import { AntDesign } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <LinearGradient
      colors={[colors.primary[500], colors.secondary[500], colors.blue[800]]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <AntDesign name="setting" size={40} color={colors.primary[500]} style={styles.icon} />
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.description}>App settings will appear here</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: colors.neutral[50],
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: colors.neutral[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
    maxWidth: 400,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: colors.primary[700],
    marginBottom: 15,
    fontFamily: 'Pacifico',
  },
  description: {
    fontSize: 16,
    color: colors.neutral[600],
    textAlign: 'center',
    fontFamily: 'Pacifico',
  },
});

export default SettingsScreen;
