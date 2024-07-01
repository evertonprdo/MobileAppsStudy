import { TextInput, View } from "react-native"

import styles from "../styles"
import MessengerButton from "./MessagerButton"

import type { Contact } from "../model/DATA";
import type { Action } from "../model/messengerReducer"

type ChatProps = {
    contact: Contact
    message: string
    dispatch: (action: Action) => void
}
export default function Chat({ contact, message, dispatch }: ChatProps) {
    function handleOnChangeText(value: string) {
        dispatch({
            type: 'edited_message',
            contactId: contact.id,
            message: value
        })
    }
    function onPress() {
        dispatch({
            type: "message_sent",
            contactId: contact.id,
            message: message,
            email: contact.email
        })
    }

    return (
        <View style= {styles.chatContainer}>
            <TextInput
                value={ message }
                placeholder={`Chat to ${contact.name}`}
                onChangeText={(value) => handleOnChangeText(value)}

                multiline= { true }
                placeholderTextColor={'#c3c3c3'}
                style= { styles.chatTextInput }
            />
            <MessengerButton 
                title={ 'Send to ' +  contact.email}
                onPress={ onPress }
            />
        </View>
    )
}