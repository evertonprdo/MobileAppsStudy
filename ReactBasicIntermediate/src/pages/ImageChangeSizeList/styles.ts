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
const text: StyleProp<TextStyle> = {
    fontSize: 14,
    letterSpacing: 0.3,
    color: '#333'
}

export const styles = StyleSheet.create({
    mainContainer: {
        ...border,

        ...flexCenter,
        flex: 1,
        
        margin: 10,
        padding: 10,
        gap: 10,

        backgroundColor: 'white',
    },
    filterContainer: {
        ...flexCenter,
        flexDirection: 'row',
        height: 33,
        gap: 7
    },

    placeListContainer: {
        width: '100%',
    },

    placeItemContainer: {
        ...border,

        flex: 1,
        flexDirection: 'row',

        gap: 12,
        marginBottom: 12,
        padding: 9

    },

    thumbailContainer: {
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
    },

    descriptionContainer: {
        flex: 3,
        marginVertical: -3.7
    },
    titleText: {
        ...text,
        fontWeight: 'bold',
        fontSize: 15
    },
    descriptionText: {
        ...text,
    },
})

export default styles