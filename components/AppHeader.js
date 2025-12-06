import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mon Application React Native</Text>
            <Text style={styles.subtitle}>Premier composant réutilisable</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        paddingVertical: 30, // Increased padding
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20, // Rounded corners
        borderBottomRightRadius: 20,
        elevation: 5, // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        fontSize: 26, // Larger font
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        textTransform: 'uppercase', // Uppercase
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginTop: 8,
        fontStyle: 'italic', // Italic
    },
});
