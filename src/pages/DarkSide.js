import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LightSide() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DarkSide</Text>
      <TouchableOpacity style={[styles.buttonDark]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Darth Vader</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonDark]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Darth Maul</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonDark]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Counde Dooku</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonDark]}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Palpatine</Text>
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
  buttonDark: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "red",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "600",
  },
});