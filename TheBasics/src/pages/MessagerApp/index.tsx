import { useReducer } from "react";
import { View } from "react-native";

import styles from "./styles";
import Chat from "./components/Chat";
import ContactList from "./components/ContactList";

import DATA, { type Contact, type Contacts } from "./DATA";
import messengerReducer, { initialState } from "./model/messengerReducer";

export default function Messanger() {
    //const [ state, dispatch ] = useReducer(messengerReducer, initialState)
    //const message = state.message
    //const contact = DATA.find((c) => c.id === state.selectedId)

    return (
        <View style= { styles.mainContainer }>
            <ContactList
                contacts={ DATA }
                onPress= { () => {return} }
            />
            <Chat
                email= { DATA[0].email }
                sendMessage= { () => {return} }
            />
        </View>
    )
}