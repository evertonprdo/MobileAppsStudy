import { Button, TextInput, View } from "react-native";
import style from "../styles";
import { useState } from "react";

type addToDoProps = {
    onAddToDo: (title: string) => void
}
export default function AddToDo({ onAddToDo }: addToDoProps) {
    const [text, setText] = useState('');

    return (
        <View style= {style.addContainer}>
            <TextInput 
                placeholder="Add ToDo"
                value= {text}
                onChangeText={ setText }
                style= {style.TextInput}
            />
            <Button
                title="Add"
                onPress={() => {
                    onAddToDo(text);
                    setText('');
                }}
            />
        </View>
    )
}