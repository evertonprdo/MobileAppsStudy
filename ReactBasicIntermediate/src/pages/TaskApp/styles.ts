import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle  } from "react-native";

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
        backgroundColor: 'white',

        ...flexCenter,
        flex: 1,

        margin: 10,
        padding: 7,
        gap: 10
    },
    appTitle: {
        ...text,
        fontSize: 21,
        fontWeight: 'bold',
        paddingVertical: 7,
    },
    taskAppButton: {
        ...border,

        ...flexCenter,
        flex: 1,

        minHeight: 33,
    },
    textButton: {
        ...text,
        fontWeight: '600',
        userSelect: 'none'
    },
    textInput: {
        ...border,
        flex: 3,

        paddingHorizontal: 10,
        paddingVertical: 7
    },

    addContainer: {
        flexDirection: 'row',

        width: '100%',
        height: 37,
        gap: 10
    },

    taskListContainer: {
        width: '100%'
    },

    taskItemContainer: {
        ...border,

        ...flexCenter,
        flexDirection: 'row',
        flex: 1,

        minHeight: 67,
        marginBottom: 12,
        padding: 5,
        gap: 7
    },
    taskSwitch: {

    },
    taskInputText: {
        ...text,
        flex: 2,
    }
})

export default styles