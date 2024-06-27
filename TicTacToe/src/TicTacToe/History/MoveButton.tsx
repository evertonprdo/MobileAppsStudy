import { Pressable, Text } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"
import styles from "../styles"

type MoveButtonProps = {
    isCurrentMove: boolean,
    onPress: () => void,
    description: string
    style: StyleProp<ViewStyle>
}
export default function MoveButton({ isCurrentMove, onPress, description, style }: MoveButtonProps) {
    return(
        <Pressable
            onPress= { onPress }
            style= {[ style, { backgroundColor: isCurrentMove ? '#eee' : 'white'} ]}
            disabled= { isCurrentMove }
        >
            <Text style= { styles.gameText }>
                { description }
            </Text>
        </Pressable>
    )
}