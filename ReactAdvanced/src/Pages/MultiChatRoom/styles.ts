import { Platform, StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

const isWeb = Platform.OS === 'web'

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const border: StyleProp<ViewStyle> = {
    borderRadius: 7
}
const text: StyleProp<TextStyle> = {
    color: '#333',
    letterSpacing: 0.3,
    fontWeight: '600',

    textAlign: 'center',
}

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        
        width: isWeb ? '100%' : undefined,
        maxWidth: 500,

        marginVertical: isWeb ? 33 : 10,
        marginHorizontal: isWeb ? 'auto' : 10,

        padding: 21,
        gap: 15,

        ...border,
        backgroundColor: '#f3f3f3',
    },
    popUpContainer: {
        position: 'absolute',
        ...flexCenter,
        
        ...border,
        borderWidth: 1,
        borderColor: '#ccc',

        width: 144,
        height: 57,

        top: 10,
        right: 10,
        backgroundColor: '#f3f3f3',
        zIndex: 1
    },
    popupText: {
        ...text,
        fontSize: 17,
        fontWeight: 'bold',

        color: '#333'
    },

    text: {
        ...text,
        fontWeight: '600',
        fontSize: 17
    },
    
    chatNavigation: {
        flex: 1,
        justifyContent: 'center',
    },
    navSelectContainer: {
        flex: 1,
        flexDirection: 'row',
        ...flexCenter,

        gap: 7
    },
    navButton: {
        ...border,

        flex: 1,
        ...flexCenter,

        height: 47,
        maxWidth: 144,

        backgroundColor: '#348e91'
    },
    navButtonText: {
        ...text,
        color: '#f3f3f3',

        fontSize: 17,
        fontWeight: 'bold',
        
        userSelect: 'none'
    },
    navSwitchContainer: {
        flex: 1,
        flexDirection: 'row',
        ...flexCenter,

        gap: isWeb ? 10 : undefined
    },

    chatContainer: {
        flex: 3,

        padding: 10,

        ...border,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    chatText: {
        ...text,
        fontSize: 21,
        fontWeight: 'bold'
    }
})

export default styles