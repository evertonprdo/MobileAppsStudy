import { Pressable, Text } from "react-native"

import styles from "../styles"
import type { Square } from "../types"

type SquareProps = {
    value: Square,
    isWinSquare?: boolean,
    onSquareClick: () => void
}
export default function Square({ value, onSquareClick, isWinSquare }: SquareProps) {
    return (
        <Pressable 
            style= { styles.square }
            onPress={ onSquareClick }
        >
            <Text 
                style= {[
                    styles.squareText,
                    isWinSquare ? {color: 'red'}: {color: '#333'}
                ]}
            >
                { value }
            </Text>
        </Pressable>
    )
}