import { TouchableOpacity, Text, StyleSheet } from "react-native-web"

export const DefaultButton =({ title, onPress }) => {
    return( 
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: 60,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        backgroundColor: "#FFE81F",
      },
    
      buttonText: {
        color:"black",
        fontSize: 22,
        fontWeight: "600",
      },
});

export default DefaultButton;