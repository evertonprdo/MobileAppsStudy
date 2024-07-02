import { useRef, useState } from "react";
import { Button, TextInput, View } from "react-native";

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
        <View>
            <TextInput 
                value= { text }
                onChangeText={ handleChange }
                style= {{padding: 7, backgroundColor: 'white'}}
            />
            <Button 
                title="Send"
                onPress={ handleSend }
            />
        </View>
    )
}