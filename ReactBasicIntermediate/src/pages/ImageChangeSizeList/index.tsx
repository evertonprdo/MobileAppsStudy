import { useState } from "react";
import { View } from "react-native";

import st from "./styles";
import PlaceList from "./components/PlacesList";

import DATA from "./model/DATA";
import { IsImageLarge } from "./model/Context";
import SwitchImageSize from "./components/SwitchImageSize";

export default function ImageChangeSizeList() {
    const [ isImageLarge, setIsImageLarge ] = useState(false)
    return (
        <IsImageLarge.Provider value={isImageLarge}>
            <View style= {st.mainContainer}>
                <SwitchImageSize 
                    isImageLarge= { isImageLarge }
                    onValueChange={ setIsImageLarge }
                />

                <PlaceList 
                    places={ DATA }
                />
            </View>
        </IsImageLarge.Provider>
    )
}