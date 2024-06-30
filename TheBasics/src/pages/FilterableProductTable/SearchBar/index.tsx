import { Switch, Text, TextInput, View } from "react-native"
import styles from "../styles"

type SearchBarProps = {
    value: boolean
    onSearch: (str: string) => void
    onChange: (value: boolean) => void
}
export default function SearchBar({ value, onSearch, onChange }: SearchBarProps) {
    return (
        <View style= {styles.searchContainer}>
            <TextInput
                placeholder="Search..."
                placeholderTextColor={ "#bbb" }
                onChangeText={ onSearch }
                style= { styles.searchInput }
            />
            <View style= {styles.switchContainer}>
                <Text style= {styles.switchText}>
                    Only show products in stock
                </Text>

                <Switch
                    value= { value }
                    onValueChange={ onChange }
                />
            </View>
        </View>
    )
}