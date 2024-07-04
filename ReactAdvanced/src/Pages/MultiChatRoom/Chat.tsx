import { Text, View } from "react-native"
import s from "./styles";

type ChatProps = {
    roomId: string
}
export default function Chat({ roomId }: ChatProps) {
    return (
        <View style= {s.chatContainer}>
            <Text style= {s.chatText}>
                Welcome to the {roomId} room!
            </Text>
        </View>
    )
}