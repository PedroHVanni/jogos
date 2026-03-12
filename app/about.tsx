import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre Nós</Text>
      <Link href="/"style={styles.button}> Página Inicial </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: "center",
        alignItems: "center",
      },
    text: {
        color: "#fff",
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
});