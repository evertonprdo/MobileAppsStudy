import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function PizzaTranslator() {
    const [text, setText] = useState('');

    const pizzaTranslatorFn = (texto: string) => {
        return texto.split(' ').map(word => word && '🍕').join(' ');
    }

    return (
        <View style={{padding: 10}}>
            <TextInput style={styles.TextInput} placeholder="Type here to translate" onChangeText={(newText) => setText(newText)} defaultValue={text}/>
            <Text style={styles.Text}> {pizzaTranslatorFn(text)} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        height: 40,
        backgroundColor: '#ddd',
        padding: 12,
        borderRadius: 25
    },
    Text: {
        padding: 10,
        fontSize: 35
    }
})