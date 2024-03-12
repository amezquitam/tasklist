import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Hello world</Text>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default App
