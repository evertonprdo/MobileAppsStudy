import { Switch, Text, View } from "react-native"

import s from "../style"
import { useTheme } from "../Hooks"

type SelectThemeProps = {
    onValueChange: (value:boolean) => void
}
export default function SelectTheme({ onValueChange }: SelectThemeProps) {
    const { name } = useTheme()
    const textStyle = [
        s.textButton,
        name === 'dark' && s.darkTextButton
    ]
    return (
        <View style= {s.selectThemeContainer}>
            <Switch
                value= { name === 'dark' }
                onValueChange={ onValueChange }
            />
            <Text
                style= { textStyle }
            >
                Use dark mode
            </Text>
        </View>
    )
}