import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            Todos
        </Text>
    </View>
)
const styles = StyleSheet.create({
    header: {
        marginTop: 80
    },
    headerText: {
        textAlign: 'center', fontSize: 72,
        color: '#fff',
        fontWeight: '100',
        borderColor: 'black',
    }
})
export default Heading