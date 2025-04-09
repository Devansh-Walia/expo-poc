import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useStore from '../store/userStore';
import { colors } from '../constants/colors/colors';
import { AntDesign } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const userName = useStore((state) => state.userName);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: `Welcome ${userName}`,
      headerStyle: {
        backgroundColor: colors.primary[500],
      },
      headerTintColor: colors.neutral[50],
      headerTitleStyle: {
        fontFamily: 'Pacifico',
        fontSize: 20,
      },
      headerLeft: () => (
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.headerButton}
        >
          <AntDesign name="arrowleft" size={24} color={colors.neutral[50]} />
          <Text style={styles.headerButtonText}>Back</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={styles.headerButton}
        >
          <AntDesign name="home" size={24} color={colors.neutral[50]} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, userName]);

  return (
    <LinearGradient
      colors={[colors.primary[500], colors.secondary[500], colors.blue[800]]}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={[
          styles.scrollContent,
          isLandscape && styles.landscapeContent
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[
          styles.content,
          isLandscape && styles.landscapeCard
        ]}>
          <AntDesign name="star" size={isLandscape ? 40 : 50} color={colors.primary[500]} style={styles.icon} />
          <Text style={[
            styles.welcomeText,
            isLandscape && styles.landscapeText
          ]}>Welcome</Text>
          <Text style={[
            styles.nameText,
            isLandscape && styles.landscapeNameText
          ]}>{userName}!</Text>
          <Text style={[
            styles.message,
            isLandscape && styles.landscapeMessage
          ]}>We're glad to have you here.</Text>
          <AntDesign name="heart" size={isLandscape ? 30 : 40} color={colors.secondary[500]} style={styles.icon} />
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
  landscapeContent: {
    paddingHorizontal: 40,
  },
  content: {
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
  landscapeCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 36,
    color: colors.primary[700],
    marginBottom: 10,
    fontFamily: 'Pacifico',
  },
  landscapeText: {
    fontSize: 32,
    marginBottom: 5,
    width: '100%',
    textAlign: 'center',
  },
  nameText: {
    fontSize: 28,
    color: colors.secondary[700],
    marginBottom: 15,
    fontFamily: 'Pacifico',
  },
  landscapeNameText: {
    fontSize: 24,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: colors.neutral[700],
    textAlign: 'center',
    fontFamily: 'Pacifico',
  },
  landscapeMessage: {
    fontSize: 16,
    width: '100%',
  },
  icon: {
    marginVertical: 10,
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  headerButtonText: {
    color: colors.neutral[50],
    marginLeft: 4,
    fontFamily: 'Pacifico',
    fontSize: 16,
  },
});

export default WelcomeScreen;
