import { Text, TextInput, View } from "react-native"
import s from "../../style"
import { useTheme } from "../../Hooks"

type InputLoginProps = {
    label: string
    value?: string 
    onChangeText?: (value: string) => void
}
export default function InputLogin({ label, value, onChangeText }: InputLoginProps) {
    const labelTextStyle = [
        s.textButton,
        useTheme().name === "dark" && s.darkTextButton
    ]

    return (
        <View style= {s.formLabelContainer}>
            <Text style= {labelTextStyle}>
                { label }
            </Text>
            <TextInput
                value= { value }
                onChangeText= { onChangeText }
                style= { s.labelInput }
            />
        </View>
    )
}