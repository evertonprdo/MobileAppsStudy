import { Pressable, Text, View } from "react-native"
import { TravelProps } from "./DATA"
import styles from "./styles"

type PlaceTreeProps = {
    id: number
    index: number
    parentId: number
    placesById: TravelProps
    maxStep: number
    onComplete: (parentId: number, id: number) => void
}
export default function PlaceTree({ id, parentId, placesById, onComplete, index, maxStep }: PlaceTreeProps) {
    const place = placesById[id]
    const childIds = place.childIds

    const step = 3
    const lightness = ((index + 1) * step) + (100 - (maxStep * step))
    return (
        <View
            style= {[
                styles.travelPlanContainer,
                {backgroundColor: `hsl(0, 0%, ${lightness}%)`} 
            ]}
        >
            <View style= {styles.planConainer}>
                <Text style= {styles.travelText}>
                    {place.title}
                </Text>

                <Pressable
                    onPress={ () => { onComplete(parentId, id) } }
                    style= { styles.buttonContainer }
                >
                    <Text style= { styles.buttonText }>Complete</Text>
                </Pressable>
            </View>

            { childIds.map((childId) => (
                <PlaceTree 
                    key={childId}
                    id={childId}
                    index={index + 1}
                    parentId={id}
                    placesById={placesById}
                    onComplete={ onComplete }
                    maxStep={ maxStep }
                />
            )) }
        </View>
    )
}