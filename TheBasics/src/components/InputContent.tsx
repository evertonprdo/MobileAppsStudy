import { useState } from "react";
import { Platform, View, Text, TextInput, Pressable, Keyboard} from "react-native";
import type { NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";

export default function InputContent() {
    const [ text, setText ] = useState('hello');

    function handleReset() {
        setText('hello')
    }
return(
    <View style= {{gap: 12, padding: 10}}>
        <TextInput
            onChangeText={ setText }
            value= { text }
            style= {{ borderWidth: 1, borderColor: '#333', padding: 10, backgroundColor: '#fff' }}
        />
        <Text>{`Current Text: ${text}`}</Text>
        <Pressable
            style= {{paddingVertical: 7, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center'}}
            onPress={ handleReset }
        >
            <Text>Reset</Text>
        </Pressable>
    </View>
)}