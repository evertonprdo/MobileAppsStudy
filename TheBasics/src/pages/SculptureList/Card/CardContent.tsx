import { Text, View } from "react-native"
import { SculptureProps } from "../DATA"
import styles from "../styles"
import { Thumbnail, CardButton } from "./CardComponents"

type CardContentProps = {
    sculpture: SculptureProps
    showDetails: boolean
    onPressDetails: () => void
}
export default function CardContent({ sculpture, onPressDetails, showDetails }: CardContentProps) {
    return (
        <View style= { styles.bodyContainer }>
            <Thumbnail
                key={ sculpture.alt }
                url={ sculpture.url }
                alt= { sculpture.alt }
            />
            <CardButton 
                title="ShowDetails"
                onPress={ onPressDetails }
                style= { styles.detailsButton }
            />
            { showDetails && (
                <Text style= { styles.descriptionText }>
                { sculpture.description }
                </Text>
            )}
            
        </View>
    )
}