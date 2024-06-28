import { Image, Pressable, Text } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"
import styles from "../styles"

type ThumbnailProps = {
    url: string
    alt: string
}
export function Thumbnail({ url, alt }: ThumbnailProps) {
    return (
        <Image
            style= { styles.thumbnail }
            source={{ uri: url }}
            alt={ alt }
        />
    )
}

type CardButtonProps = {
    title: string
    onPress: () => void
    style: StyleProp<ViewStyle>
}
export function CardButton({ title, onPress, style }: CardButtonProps) {
    return (
        <Pressable 
            style= { style }
            onPress= { onPress }
        >
            <Text style= {styles.buttonText}>{ title }</Text>
        </Pressable>
    )
}