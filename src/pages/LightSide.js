import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LightSide() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LightSide</Text>
      <TouchableOpacity style={[styles.buttonLight, { backgroundColor: '#00FF00' }]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Luke Skywalker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonLight, { backgroundColor: '#00FF00' }]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Leia Organa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonLight, { backgroundColor: '#00FF00' }]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Obi-Wan Kenobi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonLight, { backgroundColor: '#00FF00' }]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Yoda</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white"
  },
  buttonLight: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#0000CD",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "600",
  },
});