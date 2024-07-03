import { forwardRef } from "react";
import { TextInput } from "react-native";

type SearchInputProps = {
    placeholder: string
}
export default forwardRef<TextInput, SearchInputProps>(
    function SearchInput(props, ref) {
        return (
            <TextInput 
                {...props} 
                ref={ref}
                style= {{backgroundColor: 'white', padding: 12}} 
                placeholderTextColor={'#ccc'}
            />
        )
    }
)
