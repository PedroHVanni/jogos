import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    label: string;
};

export default function Button({ label, theme }: Props) {
    if (theme === 'primary') {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}> 
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});

//slide 54