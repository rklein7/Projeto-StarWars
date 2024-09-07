import { TouchableOpacity, Text, StyleSheet } from "react-native"

const DefaultButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.defaultButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const ForcesButton = ({ title, onPress, children, style }) => {
  return (
    <TouchableOpacity style={[styles.buttonForces, style]} onPress={onPress}>
      {children ? children : <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  defaultButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 4,
    borderColor: "#ff8600",
    borderRadius: 8,
    backgroundColor: 'yellow',
    cursor: 'pointer',
    boxShadow: '4px 6px 0px #ff8600',
    border: '4px solid #ff8600',
  },
  buttonText: {
    color: "#FF4D00",
    fontSize: 20,
    fontWeight: "600",
  },
  buttonForces: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 4,
    borderRadius: 8,
    marginBottom: 30,
    cursor: 'pointer',
  },
})
export { DefaultButton, ForcesButton };