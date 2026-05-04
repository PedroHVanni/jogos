import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre RPG de Mesa</Text>
      <Text style={styles.description}>
        RPG de Mesa (Role-Playing Game) é um jogo de interpretação de papéis onde jogadores controlam personagens fictícios em um mundo imaginário. Um mestre de jogo (GM ou Dungeon Master) gerencia a história e o mundo, enquanto os outros jogadores controlam seus personagens e fazem escolhas que afetam o desenvolvimento da narrativa.
      </Text>
      <Text style={styles.description}>
        A essência do RPG está na criatividade, colaboração e improvisação. Os jogadores usam dados, fichas de personagem e sua imaginação para criar aventuras únicas e memoráveis. Cada sessão é uma experiência diferente, já que as decisões dos jogadores moldam a história de forma única.
      </Text>
      <Text style={styles.description}>
        Este aplicativo ajuda a gerar fichas de personagem aleatoriamente, fornecendo atributos, raça, classe e outras características essenciais para começar sua jornada épica!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    color: "#fff",
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 15,
    lineHeight: 24,
  },
});