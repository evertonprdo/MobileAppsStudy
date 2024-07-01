import { Pressable, Text  } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"
import styles from "../styles"

type MessagerButtonProps = {
    title: string
    onPress: () => void
    style?: StyleProp<ViewStyle>
}
export default function MessengerButton({ title, onPress, style }: MessagerButtonProps) {
    return (
        <Pressable
            onPress= { onPress }
            style= {[ style, styles.button ]}
        >
            <Text>{ title }</Text>
        </Pressable>
    )
}