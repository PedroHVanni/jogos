import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from 'react-native';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji] = useState<ImageSourcePropType[]>([
        require('/Users/ra2457015/Desktop/Jogos/jogos/assets/images/331a8ba0fd9f33bfe5bd770521459e1b-dados-para-jogos-de-rpg.webp'),
        require('/Users/ra2457015/Desktop/Jogos/jogos/assets/images/6299689.png'),
        require('/Users/ra2457015/Desktop/Jogos/jogos/assets/images/10096798.png'),
        require('/Users/ra2457015/Desktop/Jogos/jogos/assets/images/bau-de-tesouro.png'),
        require('/Users/ra2457015/Desktop/Jogos/jogos/assets/images/jogo-rpg.png'),
        require('/Users/ra2457015/Desktop/Jogos/jogos/assets/images/livro.png'),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}>
                    <Image source={item} style={styles.image} />
                </Pressable>
            )}
        />
    );
 }

 const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
 });