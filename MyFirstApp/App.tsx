import React from "react";
import { View, StyleSheet } from "react-native";

import FlexDirectionBasics from "./components/FlexDirectionBasics";
import RowGapAndColumnGap from "./components/RowGapColumnGap";
import ImageComponents from "./components/ImageComponents";
import ButtonBasics from "./components/HandlingTouches/ButtonBasics";
import Touchables from "./components/HandlingTouches/Touchables";

const MyFirstApp = () => {
    return (
        //<Touchables />
        <View style= {styles.mainContainer}>
            <ImageComponents />
        </View>
    )
}

export default MyFirstApp;

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 50,

            backgroundColor: '#10121c',
        }
    }
)