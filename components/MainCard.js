import { StyleSheet, Text, View } from 'react-native';

export default function MainCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Bienvenue !</Text>
            <Text style={styles.cardText}>
                Ceci est une carte personnalisée ajoutée comme défi.
                Elle rend l'interface plus riche.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    cardText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
    },
});
