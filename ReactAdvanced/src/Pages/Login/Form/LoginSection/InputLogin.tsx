import { Text, TextInput, View } from "react-native"

type InputLoginProps = {
    label: string
    value?: string 
    onChangeValue?: (value: string) => void
}
export default function InputLogin({ label }: InputLoginProps) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput/>
        </View>
    )
}