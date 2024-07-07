import { Image, View } from "react-native"
import s from "../../styles"

type ThumbnailProps = {
    url: string
}
export default function Thumbnail({ url }: ThumbnailProps) {
    return (
        <View style= {s.thumbnailContainer}>
            <Image
                source={{uri: url}}
                style= { s.image }
            />
        </View>
    )
}