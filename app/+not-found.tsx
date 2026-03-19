import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title: 'Ops! Página não encontrada' }} />
        <View style={styles.container}>
            <Link href="/"style={styles.button}> Voltar para a página inicial </Link>
        </View>
    </>
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