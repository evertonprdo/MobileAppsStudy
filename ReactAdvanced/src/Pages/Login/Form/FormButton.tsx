import { Pressable, Text } from "react-native"

import s from "../style"
import { useTheme } from "../Hooks"

type FormButtonProps = {
    title: string
    onPress?: () => void
}
export default function FormButton({title, onPress}: FormButtonProps) {
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
        >
            <Text style= {textStyle}>
                {title}
            </Text>
        </Pressable>
    )
}