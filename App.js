import { StatusBar } from 'expo-status-bar';
import { Image, Dimensions,  StyleSheet, Text, View } from 'react-native';
const { width } = Dimensions.get('screen');

export default function App() {
  return (
    <View style={styles.container}>
        <h3 class="back">HAPPY BIRTHDAY!</h3>
      <Image source={require('./assets/cake2.png')} style={styles.cake}/>
     <p>Having the opportunity to wish a happy birthday and celebrate the life of a great friend like you is a true gift!! Have a great day today and the year ahead is full of many blessings.</p>
     <p class="name">Tanya</p>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
    },
    cake: {
      width,
      height: width * 1.2,
      resizeMode: 'cover'
    }
});
