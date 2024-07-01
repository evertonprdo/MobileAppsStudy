import { FlatList } from "react-native"

import type { Contacts } from "../model/DATA"
import type { Action } from "../model/messengerReducer"
import styles from "../styles"
import MessengerButton from "./MessagerButton"

type ContactListProps = {
    contacts: Contacts
    selectedId: number
    dispatch: (action: Action) => void
}
export default function ContactList({ contacts, selectedId, dispatch }: ContactListProps) {
    function handleOnPress(id: number) {
        dispatch({
            type: 'changed_selection',
            contactId: id,
            message: ''
        })
    }
    
    return (
        <FlatList
            data={ contacts }
            keyExtractor={({id}) => `Contact_${id}`}
            style= { styles.listContainer }
            renderItem= { ({item}) => 
                <MessengerButton 
                    title={ item.name }
                    onPress={ () => handleOnPress(item.id) }
                    style= {[ styles.listButton, { backgroundColor: selectedId ? '#ccc' : 'white'} ]}
                />
            }
        />
    )
}