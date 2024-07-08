import { Pressable, Text } from "react-native"

import s from "../style"
import { useTheme } from "../Hooks"

type FormButtonProps = {
    title: string
    onPress?: () => void
    disable?: boolean
}
export default function FormButton({title, onPress, disable}: FormButtonProps) {
    const { name } = useTheme()
    const buttonStyle = [
        s.button,
        name === 'dark' && s.darkButton
    ]
    const textStyle = [
        s.textButton,
        name === 'dark' && s.darkTextButton
    ]

    return (
        <Pressable
            style= {buttonStyle}
            disabled= { disable }
            onPress= { onPress }
        >
            <Text style= { textStyle }>
                {title}
            </Text>
        </Pressable>
    )
}