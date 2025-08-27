import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text style={{color:"blue", fontSize:25}}>Arthur Ricardo Jacinto</Text>
      <Text style={styles.titulo}> SENAI </Text>
      <Image
        source={{
          url:"https://pm1.aminoapps.com/6410/4d28e79870b7246f5402ae8783dd0ec872400900_hq.jpg"
        }}
        ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: "red",
    fontSize: 20,
    fontWeight:"bold"
  }
});
