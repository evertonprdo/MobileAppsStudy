import { Text, TextInput } from "react-native";
import st from "../../styles";

type TaskLabelProps = {
    isEditing: boolean
    text: string
    onChangeText: (value: string) => void
}
export default function TaskLabel({isEditing, onChangeText, text}: TaskLabelProps) {
    return (
        <>
            { isEditing ? (
                <TextInput 
                    value= { text }
                    onChangeText= { (value) => onChangeText(value) }
                    style= {[
                        st.taskInputText,
                        isEditing && st.textInput
                    ]}
                />
            ) : (
                <Text style= { st.taskInputText }>{ text }</Text>
            )}
        </>
    )
}