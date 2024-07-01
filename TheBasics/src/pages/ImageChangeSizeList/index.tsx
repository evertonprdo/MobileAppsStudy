import { FlatList, Image, Switch, Text, View } from "react-native";
import DATA, { Place, Places } from "./model/DATA";
import { getImageUrl } from "./model/utils";
import st from "./styles";

export default function ImageChangeSizeList() {
    /**
     * <Switch {isLargeImages}>
     * <PlaceList>
     */
    return (
        <View style= {st.mainContainer}>
            <View>
                <Switch />
                <Text>Use Large Images</Text>
            </View>

            <PlaceList 
                places={ DATA }
            />
        </View>
    )
}

type PlaceListProps = {
    places: Places
}
function PlaceList({places}: PlaceListProps) {
    /**
     * <FlatList renderItem={<Place/>}/>
     */
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

type PlaceItemProps = {
    place: Place
}
function PlaceItem({ place }: PlaceItemProps) {
    /**
     * <Thumbnail/>
     * <Description/>
     */
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

type ThumbnailProps = {
    url: string
}
function Thumbnail({url}: ThumbnailProps) {
    /** 
     *  style= { Context(isLargeImage) }
     *  <Image source={uri: 'url'} />
     */
    return (
        <View style= { st.thumbailContainer }>
            <Image 
                source= {{uri: url}}
                style= {st.image}    
            />
        </View>
    )
}

type DescriptionProps = {
    name: string
    description: string
}
function Description({ name, description }: DescriptionProps) {
    /**
     *  <Text> {name + Description}
     */
    return (
        <View>
            <Text>{`${name}: ${description}`}</Text>
        </View>
    )
}