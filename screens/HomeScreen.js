import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Card from '../components/Card';

const HomeScreen = () => (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(76, 102, 159, 0.9)', 'rgba(59, 89, 152, 0.9)', 'rgba(25, 47, 106, 0.9)']}
        style={styles.gradient}
      >
        <StatusBar style="light" />
        <Card />
      </LinearGradient>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen