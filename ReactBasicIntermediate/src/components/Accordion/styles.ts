import { StyleSheet } from "react-native"
import type { StyleProp, TextStyle, ViewStyle } from "react-native"

const border: StyleProp<ViewStyle> = {
    borderColor: '#ccc',
    borderRadius: 7,
    borderWidth: 1,
}
const text: StyleProp<TextStyle> = {
    letterSpacing: 0.3,
    color: '#333'
}
export const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        gap: 17,
        padding: 12
    },

    panelContainer: {
        borderColor: '#ccc',
        borderTopWidth: 1,

        paddingVertical: 17,
        paddingHorizontal: 12,
        width: '100%',
        gap: 12,
        justifyContent: 'space-between',
    },

    accordionContainer: {
        ...border,
        width: '100%',
        backgroundColor: 'white'
    },

    showButton: {
        ...border,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 7,
    },
    textButton: {
        ...text,
        fontSize: 14,
        userSelect: 'none',
        fontWeight: '600'
    },

    textTitle: {
        ...text,
        fontWeight: 'bold',
        fontSize: 17,
    },
    textContent: {
        ...text,
        fontSize: 14,
    }
})

export default styles