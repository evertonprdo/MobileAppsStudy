import { Pressable, Text } from "react-native"
import st from "../styles"

type TaskAppButtonProps = {
    title: string
    onPress: () => void
}
export default function TaskAppButton({title, onPress}: TaskAppButtonProps) {
    return (
        <Pressable
            style= { st.taskAppButton }
            onPress={ onPress }
        >
            <Text style= { st.textButton }>{ title }</Text>
        </Pressable>
    )
}