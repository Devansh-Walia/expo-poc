import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://picsum.photos/1200/2400' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(76, 102, 159, 0.9)', 'rgba(59, 89, 152, 0.9)', 'rgba(25, 47, 106, 0.9)']}
          style={styles.gradient}
        >
          <StatusBar style="light" />
          <Card />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
