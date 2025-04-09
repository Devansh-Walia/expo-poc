import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './components/Card';

export default function App() {
  return (
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
}

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
