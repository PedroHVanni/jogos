import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

type Monster = {
  index: string;
  name: string;
};

export default function MonstrosScreen() {
  const [monstros, setMonstros] = useState<Monster[]>([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [monsterDetails, setMonsterDetails] = useState<any>(null);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/monsters')
      .then(response => response.json())
      .then(data => {
        setMonstros(data.results || []);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const monstrosFiltrados = monstros.filter(monstro =>
    monstro.name.toLowerCase().includes(busca.toLowerCase())
  );

  const abrirDetalhes = async (index: string) => {
    try {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/monsters/${index}`
      );

      const data = await response.json();

      setMonsterDetails(data);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#39FF14" />
        <Text style={styles.loadingText}>
          Carregando monstros...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐉 Bestiário RPG</Text>

      <Text style={styles.counter}>
        {monstrosFiltrados.length} monstros encontrados
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar monstro..."
        placeholderTextColor="#94A3B8"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={monstrosFiltrados}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => abrirDetalhes(item.index)}
          >
            <Text style={styles.item}>
              🐲 {item.name}
            </Text>

            <Text style={styles.detailsHint}>
              Toque para ver detalhes
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>

              {monsterDetails && (
                <>
                  <Text style={styles.modalTitle}>
                    {monsterDetails.name}
                  </Text>

                  <Text style={styles.info}>
                    📏 Tamanho: {monsterDetails.size}
                  </Text>

                  <Text style={styles.info}>
                    👹 Tipo: {monsterDetails.type}
                  </Text>

                  <Text style={styles.info}>
                    ⚖️ Alinhamento: {monsterDetails.alignment}
                  </Text>

                  <Text style={styles.info}>
                    ❤️ Vida: {monsterDetails.hit_points}
                  </Text>

                  <Text style={styles.info}>
                    🛡️ Armadura: {monsterDetails.armor_class?.[0]?.value ??
                      monsterDetails.armor_class}
                  </Text>

                  <Text style={styles.info}>
                    ⚔️ Força: {monsterDetails.strength}
                  </Text>

                  <Text style={styles.info}>
                    🏃 Destreza: {monsterDetails.dexterity}
                  </Text>

                  <Text style={styles.info}>
                    💪 Constituição: {monsterDetails.constitution}
                  </Text>

                  <Text style={styles.info}>
                    🧠 Inteligência: {monsterDetails.intelligence}
                  </Text>

                  <Text style={styles.info}>
                    👁️ Sabedoria: {monsterDetails.wisdom}
                  </Text>

                  <Text style={styles.info}>
                    😈 Carisma: {monsterDetails.charisma}
                  </Text>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>
                      Fechar
                    </Text>
                  </TouchableOpacity>
                </>
              )}

            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25292e',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },

  loadingText: {
    color: '#E5E7EB',
    marginTop: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#39FF14',
    textAlign: 'center',
  },

  counter: {
    color: '#CBD5E1',
    textAlign: 'center',
    marginVertical: 10,
  },

  searchInput: {
    backgroundColor: '#1E293B',
    color: '#E5E7EB',
    borderWidth: 1,
    borderColor: '#475569',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },

  list: {
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },

  item: {
    color: '#E5E7EB',
    fontSize: 18,
    fontWeight: '600',
  },

  detailsHint: {
    color: '#94A3B8',
    marginTop: 5,
    fontSize: 12,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#1E293B',
    borderRadius: 15,
    padding: 20,
  },

  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#39FF14',
    marginBottom: 20,
    textAlign: 'center',
  },

  info: {
    color: '#E5E7EB',
    fontSize: 16,
    marginBottom: 10,
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#39FF14',
    padding: 12,
    borderRadius: 10,
  },

  closeButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});