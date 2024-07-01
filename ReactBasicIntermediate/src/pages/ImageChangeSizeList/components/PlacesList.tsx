import { FlatList } from "react-native"

import PlaceItem from "./PlaceItem"
import st from "../styles"

import type { Places } from "../model/DATA"

type PlaceListProps = {
    places: Places
}
export default function PlaceList({places}: PlaceListProps) {
    return (
        <FlatList 
            data= { places }
            style= { st.placeListContainer }
            keyExtractor={ (item) => `PlaceItem_${item.id}` }
            renderItem={({item}) => (
                <PlaceItem
                    place={ item }
                />
            )}
        />
    )
}