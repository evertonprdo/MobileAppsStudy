import { Text, View } from "react-native"
import st from "../styles"

type DescriptionProps = {
    name: string
    description: string
}
export default function Description({ name, description }: DescriptionProps) {
    return (
        <View style= {st.descriptionContainer}>
            <Text style= {{ textAlign: 'justify' }}>
                <Text style= {st.titleText}>{`${name}: `}</Text>
                <Text style= {st.descriptionText}>{`${description}`}</Text>
            </Text>
        </View>
    )
}