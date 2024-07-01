import { Switch, Text, View } from "react-native"
import st from "../styles"

type SwitchImageSizeProps = {
    isImageLarge: boolean
    onValueChange: (value: boolean) => void
}
export default function SwitchImageSize({ isImageLarge, onValueChange }: SwitchImageSizeProps) {
    return (
        <View style= {st.filterContainer}>
            <Switch 
                value= { isImageLarge }
                onValueChange={ onValueChange}
            />
            <Text style= { st.descriptionText }>Use Large Images</Text>
        </View>
    )
}