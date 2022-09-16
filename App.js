import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Happy Birthday</Text>
      <Text>I hope you have a wonderful birthday!</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    txt: {

    }
  },
});
