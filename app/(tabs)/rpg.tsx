import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const nomes = ['Aelin', 'Drakar', 'Lyra', 'Thorin', 'Morgana', 'Valen'];
const racas = ['Humano', 'Elfo', 'Anão', 'Orc', 'Tiefling', 'Halfling'];
const classes = ['Guerreiro', 'Mago', 'Ladino', 'Clérigo', 'Arqueiro', 'Bárbaro'];
const armas = ['Espada Longa', 'Cajado Arcano', 'Adaga Venenosa', 'Martelo de Batalha', 'Arco Élfico', 'Machado de Guerra'];

function aleatorio(colecao: string[]) {
  return colecao[Math.floor(Math.random() * colecao.length)];
}

function gerarAtributo() {
  return Math.floor(Math.random() * 11) + 8; // 8 a 18
}

export default function RpgScreen() {
  const [modoManual, setModoManual] = useState(false);
  const [nome, setNome] = useState('---');
  const [raca, setRaca] = useState('---');
  const [classe, setClasse] = useState('---');
  const [arma, setArma] = useState('---');
  const [forca, setForca] = useState(0);
  const [destreza, setDestreza] = useState(0);
  const [inteligencia, setInteligencia] = useState(0);
  const [carisma, setCarisma] = useState(0);

  const gerarFicha = () => {
    setNome(aleatorio(nomes));
    setRaca(aleatorio(racas));
    setClasse(aleatorio(classes));
    setArma(aleatorio(armas));
    setForca(gerarAtributo());
    setDestreza(gerarAtributo());
    setInteligencia(gerarAtributo());
    setCarisma(gerarAtributo());
  };

  const resetFicha = () => {
    setNome('');
    setRaca('');
    setClasse('');
    setArma('');
    setForca(0);
    setDestreza(0);
    setInteligencia(0);
    setCarisma(0);
  };

  const mudarModo = (manual: boolean) => {
    setModoManual(manual);
    if (manual) {
      resetFicha();
    }
  };

  const aplicarManual = () => {
    setNome(nome.trim() === '' ? '---' : nome);
    setRaca(raca.trim() === '' ? '---' : raca);
    setClasse(classe.trim() === '' ? '---' : classe);
    setArma(arma.trim() === '' ? '---' : arma);
    setForca(Number(forca) || 0);
    setDestreza(Number(destreza) || 0);
    setInteligencia(Number(inteligencia) || 0);
    setCarisma(Number(carisma) || 0);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Ficha de Personagem RPG</Text>
      <Text style={styles.subtitle}>Use o modo aleatório ou digite seus próprios valores.</Text>

      <View style={styles.modeRow}>
        <TouchableOpacity
          style={[styles.modeButton, !modoManual && styles.modeButtonActive]}
          onPress={() => mudarModo(false)}
        >
          <Text style={[styles.modeText, !modoManual && styles.modeTextActive]}>Aleatório</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modeButton, modoManual && styles.modeButtonActive]}
          onPress={() => mudarModo(true)}
        >
          <Text style={[styles.modeText, modoManual && styles.modeTextActive]}>Manual</Text>
        </TouchableOpacity>
      </View>

      {modoManual && (
        <View style={styles.manualContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#94a3b8"
            value={nome === '---' ? '' : nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Raça"
            placeholderTextColor="#94a3b8"
            value={raca === '---' ? '' : raca}
            onChangeText={setRaca}
          />
          <TextInput
            style={styles.input}
            placeholder="Classe"
            placeholderTextColor="#94a3b8"
            value={classe === '---' ? '' : classe}
            onChangeText={setClasse}
          />
          <TextInput
            style={styles.input}
            placeholder="Arma"
            placeholderTextColor="#94a3b8"
            value={arma === '---' ? '' : arma}
            onChangeText={setArma}
          />
          <TextInput
            style={styles.input}
            placeholder="Força"
            placeholderTextColor="#94a3b8"
            value={forca ? String(forca) : ''}
            onChangeText={(text) => setForca(Number(text) || 0)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Destreza"
            placeholderTextColor="#94a3b8"
            value={destreza ? String(destreza) : ''}
            onChangeText={(text) => setDestreza(Number(text) || 0)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Inteligência"
            placeholderTextColor="#94a3b8"
            value={inteligencia ? String(inteligencia) : ''}
            onChangeText={(text) => setInteligencia(Number(text) || 0)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Carisma"
            placeholderTextColor="#94a3b8"
            value={carisma ? String(carisma) : ''}
            onChangeText={(text) => setCarisma(Number(text) || 0)}
            keyboardType="numeric"
          />
        </View>
      )}

      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{nome || '---'}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Raça</Text>
          <Text style={styles.value}>{raca || '---'}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Classe</Text>
          <Text style={styles.value}>{classe || '---'}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Arma</Text>
          <Text style={styles.value}>{arma || '---'}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Atributos</Text>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Força</Text>
          <Text style={styles.statsValue}>{forca || '-'}</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Destreza</Text>
          <Text style={styles.statsValue}>{destreza || '-'}</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Inteligência</Text>
          <Text style={styles.statsValue}>{inteligencia || '-'}</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Carisma</Text>
          <Text style={styles.statsValue}>{carisma || '-'}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={modoManual ? aplicarManual : gerarFicha}
      >
        <Text style={styles.buttonText}>{modoManual ? 'Aplicar manual' : 'Gerar ficha'}</Text>
      </TouchableOpacity>

      {modoManual && (
        <TouchableOpacity style={styles.resetButton} onPress={resetFicha}>
          <Text style={styles.resetText}>Limpar ficha</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  contentContainer: {
    padding: 22,
    paddingBottom: 40,
  },
  title: {
    color: '#E5E7EB',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  modeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  modeButton: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#1f2937',
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  modeButtonActive: {
    backgroundColor: '#39FF14',
    borderColor: '#39FF14',
  },
  modeText: {
    color: '#cbd5e1',
    fontWeight: '700',
  },
  modeTextActive: {
    color: '#000',
  },
  manualContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1f2937',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 12,
    color: '#E5E7EB',
    padding: 14,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#1f2937',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 4,
  },
  label: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  value: {
    color: '#E5E7EB',
    fontSize: 18,
    fontWeight: '700',
  },
  statsContainer: {
    backgroundColor: '#1f2937',
    borderRadius: 16,
    padding: 18,
    marginVertical: 20,
  },
  statsTitle: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingVertical: 10,
  },
  statsLabel: {
    color: '#cbd5e1',
    fontSize: 14,
  },
  statsValue: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#39FF14',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
  resetButton: {
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#39FF14',
  },
  resetText: {
    color: '#39FF14',
    fontWeight: '700',
    fontSize: 16,
  },
});
