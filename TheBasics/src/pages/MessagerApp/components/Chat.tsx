import { TextInput, View } from "react-native"
import styles from "../styles"
import MessengerButton from "./MessagerButton"

type ChatProps = {
    email: string
    sendMessage: () => void
}
export default function Chat({ email, sendMessage }: ChatProps) {
    return (
        <View style= {styles.chatContainer}>
            <TextInput 
                multiline= { true }
                style= { styles.chatTextInput }
            />
            <MessengerButton 
                title={ 'Send to ' +  email}
                onPress={ sendMessage }
            />
        </View>
    )
}