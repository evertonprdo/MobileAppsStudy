import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AutoFocus() {
    const [ isShown, setIsShown ] = useState(false)
    const [ text, setText ] = useState({
        firstName: '',
        lastName: ''
    })

    function handleFirstName(value: string) {
        setText({
            ...text,
            firstName: value,
        })
    }
    function handleLastName(value: string) {
        setText({
            ...text,
            lastName: value
        })
    }
    return (
        <View>
            <Button
                title= { isShown ? "Hide form" : "Show Form" }
                onPress={ () => setIsShown(!isShown) }
            />
            { isShown && <>
                <MyInput
                    value= { text.firstName }
                    onChange={ handleFirstName }
                    shouldFocus
                />
                <MyInput
                    value= { text.lastName }
                    onChange={ handleLastName }
                />
            </>}
        </View>
    )
}

type MyFunctionProps = {
    value: string
    shouldFocus?: boolean
    onChange: (value: string) => void
}
function MyInput({ value, onChange, shouldFocus }: MyFunctionProps) {
    const textInputRef = useRef<TextInput>(null)

    useEffect(() => {
        if (shouldFocus) textInputRef.current?.focus()
    }, [])

    return (
        <TextInput
            ref={ textInputRef }
            value={ value }
            onChangeText={ onChange }
            style= { styles.textInput }
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        padding: 10
    }
})