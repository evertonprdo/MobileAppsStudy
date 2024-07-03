import { type TextInput, View } from "react-native";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import { useRef } from "react";

export default function MultiFileFocus() {
    const inputRef = useRef<TextInput>(null)
    return (
        <View style= {{ flex: 1, maxWidth: 737, padding: 15, marginHorizontal: 'auto' }}>
            <SearchButton 
                onClick={ () => { inputRef.current?.focus() }}
            />
            <SearchInput 
                placeholder= "Looking for something?"
                ref={ inputRef }
            />
        </View>
    )
}