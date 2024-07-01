import { useReducer } from "react";
import { View } from "react-native";

import styles from "./styles";
import Chat from "./components/Chat";
import ContactList from "./components/ContactList";

import DATA, { type Contact } from "./model/DATA";
import messengerReducer, { initialState } from "./model/messengerReducer";

export default function Messanger() {
    const [ state, dispatch ] = useReducer(messengerReducer, initialState)
    const message = state.messages[state.selectedId]
    const contact = DATA.find((c) => c.id === state.selectedId) as Contact
    
    return (
        <View style= { styles.mainContainer }>
            <ContactList
                contacts={ DATA }
                selectedId={ state.selectedId }
                dispatch= { dispatch }
            />
            <Chat
                key={ contact.id }
                message= { message }
                contact= { contact }
                dispatch= { dispatch }
            />
        </View>
    )
}