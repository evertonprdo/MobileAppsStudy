import { useRef, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function DashBoard() {
    const [ text, setText ] = useState('')
    const textRef = useRef(text)
    
    function handleSend() {
        setTimeout(() => {
            alert('Sending: ' + textRef.current)
        }, 3000)
    }
    function handleChange(v: string) {
        setText(v)
        textRef.current = v
    }
    return(
        <View style= {{flex: 1, justifyContent: 'center', alignItems: 'stretch', gap: 23, padding: 20, maxWidth: 500, marginHorizontal: 'auto'}}>
            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 21, textAlign: 'center'}}>useRef: Sending updated message</Text>
            <TextInput 
                value= { text }
                onChangeText={ handleChange }
                style= {{padding: 7, backgroundColor: 'white', borderRadius: 7, minWidth: '73%', maxWidth: 244, alignSelf: 'center'}}
            />
            <Button
                title="Send"
                onPress={ handleSend }
            />
        </View>
    )
}