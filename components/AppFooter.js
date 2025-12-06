import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
    const year = new Date().getFullYear();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                MonApp - All rights reserved, {year}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
});
