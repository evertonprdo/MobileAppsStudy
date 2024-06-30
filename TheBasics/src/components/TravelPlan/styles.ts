import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from 'react-native'

const flexCenter:StyleProp<ViewStyle> = {
    alignContent: 'center',
    justifyContent: 'center'
}
const border: StyleProp<ViewStyle> = {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7
}
const text: StyleProp<TextStyle> = {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.3
}
export const styles = StyleSheet.create({
    mainContainer: {
        margin: 7,
        padding: 3,
        paddingBottom: 21,
        gap: 17,
    },
    travelPlanContainer: {
        ...border,
        backgroundColor: 'white',
        paddingVertical: 7,
        paddingHorizontal: 12,
        gap: 7,
    },
    planConainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        ...border,
        ...flexCenter,
        paddingHorizontal: 27,
        paddingVertical: 7,
        backgroundColor: 'white',
        maxWidth: '50%',
    },
    travelText: {
        ...text,
        maxWidth: '50%',
    },
    titleText: {
        ...text,
        textAlign: 'center',
        fontSize: 27,
    },
    buttonText: {
        ...text,
        userSelect: 'none',
        fontSize: 12,
        fontWeight: '600'
    }
})

export default styles