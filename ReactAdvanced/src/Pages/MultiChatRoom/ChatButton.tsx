import { Pressable, Text } from "react-native"
import s from "./styles";

type chatButtonProps = {
    text: string
    onPress: () => void
}
export default function ChatButton({ text, onPress }: chatButtonProps) {
    return (
        <Pressable 
            style= { s.navButton }
            onPress= { onPress }
        >
            <Text style= { s.navButtonText }>{ text }</Text>
        </Pressable>
    )
}