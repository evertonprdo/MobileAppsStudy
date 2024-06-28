import { Text, View } from "react-native"

import { SculptureProps } from "../DATA"
import styles from "../styles"

type HeaderCardProps = {
    sculpture: SculptureProps
}
export default function HeaderCard({ sculpture }: HeaderCardProps) {
    return (
        <View style= {styles.headerContainer}>
            <Text style= {styles.titleHeader}>
                { sculpture.name }
            </Text>
            <Text style= {styles.subtitleHeader}>
                { sculpture.artist }
            </Text>
        </View>
    )
}