import { Pressable } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"
import s from "./styles"

type NavigationButtonProps = {
    children: React.ReactNode
    onPress: () => void
    style?: StyleProp<ViewStyle>
}
export default function MenuButton({ children, onPress, style }: NavigationButtonProps) {
    return (
        <Pressable
            style= {[ s.menuButton, style ]}
            onPress={ onPress }
        >
            { children }
        </Pressable>
    )
}