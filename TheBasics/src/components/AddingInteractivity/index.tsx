import { useState } from "react";
import { View } from "react-native";

import styles from "./styles";
import CardNavigation from "./SculptureCard/CardNavigation";
import HeaderCard from "./SculptureCard/HeaderCard";
import CardContent from "./SculptureCard/CardContent";

import { sculptureList } from "./DATA";

export default function SculptureList() {
    const DATA = sculptureList
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ showDetails, setShowDetails ] = useState(false);
    let sculpture = DATA[currentIndex]

    return (
        <View style= {styles.mainContainer}>
            <CardNavigation 
                index={ currentIndex }
                lenght={ DATA.length }
                moveToSculpture= { setCurrentIndex }
            />
            <HeaderCard 
                sculpture={ sculpture }
            />
            <CardContent
                sculpture={ sculpture }
                onPressDetails= { () => setShowDetails(!showDetails) }
                showDetails= { showDetails }
            />
        </View>
    )
}