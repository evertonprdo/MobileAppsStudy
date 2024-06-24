import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import type { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export default function InputContent() {
    const [ text, setText ] = useState('hello');

    function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
        setText(e.nativeEvent.text)
    }
return(
    <View>
        <TextInput 
            onChange={(e) => handleChange(e) }
            value= {text}
            style= {{ borderWidth: 1, borderColor: '#333', padding: 10, backgroundColor: '#fff' }}
        />
        <Text>{`Current Text: ${text}`}</Text>
    </View>
)}