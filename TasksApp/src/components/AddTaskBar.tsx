import { useState } from "react";
import { TextInput, View } from "react-native";

import TaskAppButton from "./TaskAppButton";
import st from "../styles";

import { useTasksDispatch } from "../model/TasksContext";

export default function AddTaskBar() {
    const [ text, setText ] = useState('')
    const dispatch = useTasksDispatch()

    function handleOnPress() {
        setText('')
        dispatch({
            type: "added",
            id: nextId++,
            text: text
        })
    }
    return (
        <View style= { st.addContainer }>
            <TextInput
                value= { text }
                onChangeText={ setText }
                style= { st.textInput }
            />
            <TaskAppButton 
                title="Add"
                onPress={ handleOnPress }
            />
        </View>
    )
}

let nextId = 3