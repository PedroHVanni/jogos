import { useTarefas } from '@/hooks/useTarefas';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App(){


    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Missões</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma nova missão..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <TouchableOpacity style={styles.addButton} onPress={adicionarTarefa}>
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>❌</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#25292e' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#E5E7EB' },
    inputContainer: {flexDirection: 'row', marginBottom: 10},
    input: {flex: 1, borderWidth: 1, borderColor: '#38BDF8', backgroundColor: '#0E1320', color: '#E5E7EB', padding: 10, borderRadius: 5, marginRight: 10},
    tarefaContainer: {flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0E1320', padding: 15, 
        marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowRadius: 3, elevation: 2 },
    tarefaTexto: {fontSize: 16, color: '#E5E7EB'},
    remover: {fontSize: 18, color: '#A855F7'},
    addButton: { backgroundColor: '#39FF14', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 8, justifyContent: 'center' },
    addButtonText: { color: '#000000', fontWeight: 'bold', fontSize: 16 },
});