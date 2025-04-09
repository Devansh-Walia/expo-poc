import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Card from '../components/Card';
import { colors } from '../constants/colors/colors';

const HomeScreen = () => (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary[500], colors.secondary[500], colors.blue[800]]}
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