import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const border: StyleProp<ViewStyle> = {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ccc'
}
const button: StyleProp<ViewStyle> = {
    ...border,
    ...flexCenter,
    backgroundColor: 'white',
    height: 50,
    width: '100%'
}

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    button: {
        ...button
    },

    listContainer: {
        flex: 1,
        padding: 7
    },
    listButton: {
        marginBottom: 10
    },

    chatContainer: {
        flex: 3,
        padding: 7,
        paddingLeft: 0.,
        gap: 7
    },
    chatTextInput: {
        ...border,
        backgroundColor: 'white',
        flex: 1,
        padding: 12
    },
    sendButton: {

    },
})

export default styles