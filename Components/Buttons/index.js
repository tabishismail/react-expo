import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Button = ({ children }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'blue'
                    },
                    styles.wrapperCustom
                ]}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#fff"
    },
    wrapperCustom: {
        borderRadius: 8,
        paddingHorizontal: 50,
        paddingVertical: 10
    },
});

export default Button;