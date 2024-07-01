import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const border: StyleProp<ViewStyle> = {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 7
}

export const styles = StyleSheet.create({
    mainContainer: {
        ...flexCenter,
        ...border,
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
    },

    placeListContainer: {
        padding: 5
    },

    placeItemContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },

    thumbailContainer: {
        height: 100,
        width: 100
    },
    image: {
        height: '100%',
        width: '100%'
    },

    descriptionContainer: {

    },
    titleText: {

    },
    descriptionText: {

    },
})

export default styles