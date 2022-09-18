import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color:colors.secondary,
        fontSize: 25,
        fontWeight: 'bold',
    },
});

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

export default NumberContainer;