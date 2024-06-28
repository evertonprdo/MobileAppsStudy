import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const border: StyleProp<ViewStyle> = {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#ccc",
}
const button: StyleProp<ViewStyle> = {
    ...border,
    ...flexCenter,
    paddingVertical: 7,
    paddingHorizontal: 10,
    maxHeight: 50,

}
const text: StyleProp<TextStyle> = {
    color: '#333',
    letterSpacing: 0.3,

    userSelect: 'none'
}
const headerText: StyleProp<TextStyle> = {
    ...text,
    fontWeight: 'bold',
}

export const styles = StyleSheet.create({
    mainContainer: {
        ...border,
        //flex: 1,
        margin: 10,
        padding: 21,
        gap: 20,
        justifyContent: 'space-between',

        backgroundColor: 'white',
    },
    buttonText: {
        ...text
    },

    headerContainer: {
        flexGrow: 2
    },
    titleHeader: {
        ...headerText,
        fontSize: 27
    },
    subtitleHeader: {
        ...headerText,
        fontSize: 19
    },

    bodyContainer: {
        gap: 10,
        flexGrow: 3,

    },
    thumbnail: {
        height: 233,
        //width: '100%',
        resizeMode: 'contain',
    },
    descriptionText: {
        ...text,
        textAlign: 'justify',
        fontSize: 15,
        flexGrow: 1,
    },
    detailsButton: {
        ...button,
        flexGrow: 1
    },

    footerContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        ...flexCenter,
        justifyContent: 'space-between',
        gap: 10,
    },
    indexInfoButton: {
        ...text,
        width: '33%'
    },
    indexButton: {
        ...button,
        width: '33%',
    },
})

export default styles