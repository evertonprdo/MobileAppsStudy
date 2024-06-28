import { Text, View } from "react-native";

import styles from "../styles";
import { CardButton } from "./CardComponents";

type CardNavigationProps = {
    index: number
    lenght: number
    moveToSculpture: (index: number) => void
}
export default function CardNavigation({ index, lenght, moveToSculpture }: CardNavigationProps) {
    function handleBack() {
        index === 0 ?
        moveToSculpture(lenght - 1)
        : moveToSculpture(index - 1);
    }
    function handleNext() {
        index < (lenght - 1) ?
        moveToSculpture(index + 1)
        : moveToSculpture(0);
    }
    return (
        <View style= {styles.footerContainer}>
            <CardButton 
                title="Back"
                onPress={ handleBack }
                style= { styles.indexButton }
            />

            <Text style= {styles.buttonText}>
                { `${index + 1} ... ${lenght}` }
            </Text>

            <CardButton 
                title="Next"
                onPress={ handleNext }
                style= { styles.indexButton }
            />
        </View>
    )
}