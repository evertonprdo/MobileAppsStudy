import { FlatList } from "react-native"

import type { Contacts } from "../DATA"
import styles from "../styles"
import MessengerButton from "./MessagerButton"

type ContactListProps = {
    contacts: Contacts
    onPress: () => void
}
export default function ContactList({ contacts, onPress }: ContactListProps) {
    return (
        <FlatList
            data={ contacts }
            keyExtractor={({id}) => `Contact_${id}`}
            style= { styles.listContainer }
            renderItem= { ({item}) => 
                <MessengerButton 
                    title={ item.name }
                    onPress={ onPress }
                    style= { styles.listButton } 
                />
            }
        />
    )
}