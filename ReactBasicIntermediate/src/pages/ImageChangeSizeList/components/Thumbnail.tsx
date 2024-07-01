import { useContext } from "react"
import { Image, View } from "react-native"

import st from "../styles"

import { IsImageLarge } from "../model/Context"

type ThumbnailProps = {
    url: string
}
export default function Thumbnail({url}: ThumbnailProps) {
    const isImageLarge = useContext(IsImageLarge)
    const imageSize = isImageLarge ? 144 : 93
    return (
        <View 
            style= {[
                st.thumbailContainer ,
                {height: imageSize, width: imageSize}
            ]}>
            <Image
                source= {{uri: url}}
                style= { st.image }    
            />
        </View>
    )
}