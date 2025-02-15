import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tranca pontos</Text>
      <Text style={styles.subtitles}>O app para você se divertir com seus amigos</Text>
      <Image source={require('./assets/icon.png')} style={{width: 120, height: 120}} />
      <Button title='Botao 1' color={'lightcoral'}/>
      <Text style = {[styles.title, styles.player1]}>0</Text>
      <Button title='Botao 2' onPress={()=> alert('Love you Gege')}/>
      <Text style = {[styles.title, styles.player2]}>0</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  player1: {
    color: 'lightcoral',
  },
  player2: {
    color: 'darkblue',
  },

  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitles: {
    fontSize: 12,
    color: 'darkblue',
  },
});
