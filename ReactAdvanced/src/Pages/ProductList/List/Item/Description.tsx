import { Text, View } from "react-native"

import s from "../../styles"
import { resumeString } from "../../model/utils"

type DescriptionProps = {
    title: string
    category: string
    price: number
    description: string
    rate: number
}
export default function Description({ title, price, category, description, rate }: DescriptionProps) {
    return (
        <View style= {s.descriptionContainer}>
            <View style= {s.headerContainer}>
                <Text style= {s.titleText}>{ resumeString(title, 33) }</Text>

                <View style= {s.subHeaderContainer}>
                    <Text style= {s.categoryText}>{ category }</Text>

                    <View style= {s.ratingContainer}>
                        <Text>{ `Rate: ${rate} ` }</Text>

                    </View>
                </View>
            </View>
            <Text style= {s.priceText}>{ "$" + price }</Text>

            <Text style= {s.descriptionText}>{ resumeString(description) }</Text>
        </View>
    )
}