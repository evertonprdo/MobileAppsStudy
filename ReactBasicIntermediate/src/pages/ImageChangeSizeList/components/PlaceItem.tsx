import { View } from "react-native"

import Thumbnail from "./Thumbnail"
import Description from "./Description"
import st from "../styles"

import type { Place } from "../model/DATA"
import { getImageUrl } from "../model/utils"

type PlaceItemProps = {
    place: Place
}
export default function PlaceItem({ place }: PlaceItemProps) {
    return (
        <View style= {st.placeItemContainer}>
            <Thumbnail url= { getImageUrl(place) }/>

            <Description
                name= { place.name } 
                description={ place.description }
            />
        </View>
    )
}