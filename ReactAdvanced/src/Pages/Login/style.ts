import { Platform, StyleSheet } from "react-native";
import type { ViewStyle, TextStyle, StyleProp } from "react-native";

const isWeb = Platform.OS === "web"

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const border: StyleProp<ViewStyle> = {
    borderRadius: 5,
    borderWidth: 1,
}
const text: StyleProp<TextStyle> = {
    fontSize: isWeb ? 19 : 17,
    color: '#333'
}

export const styles = StyleSheet.create({
    mainContainer: {
        width: '93%',
        maxWidth: 500,

        marginVertical: 21,
        marginHorizontal: 'auto',
        paddingVertical: 17,
        paddingHorizontal: 27,
        
        ...border,
        backgroundColor: '#fff',
    },

    darkMainContainer: {
        backgroundColor: '#213635',
        borderColor: '#fff'
    },

    selectThemeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',

        height: 45,
        gap: isWeb ? 12 : 7
    },

    formContainer: {
        gap: 33,
        paddingBottom: 17
    },
    formLabelsContainer: {
        gap: 12
    },
    formLabelContainer: {
        flexDirection: 'row',
        ...flexCenter,
        gap: 7
    },
    labelInput: {
        flex: 1,
        ...border,
        borderColor: '#ccc',

        height: 42,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },

    welcomeText: {
        ...text,
        fontSize: 31,
        fontWeight: 'bold',
        textAlign: 'center',

        alignSelf: 'center',
        paddingVertical: 17,
        width: '90%',
        borderBottomWidth: 1
    },

    darkWelcomeText: {
        color: '#fff',
        borderColor: '#fff'
    },

    buttonContainer: {
        flexDirection: 'row',
        ...flexCenter,
        gap: 10,
    },
    textInfo: {
        ...text,
        flex: 0.73,
        fontStyle: 'italic'
    },
    textInfoDark: {
        color: '#fff'
    },

    button: {
        ...flexCenter,

        flex: 1,
        height: 42,

        ...border,
        borderColor: '#aaa'
    },

    darkButton: {
        borderColor: '#fff'
    },

    textButton: {
        ...text,
        userSelect: 'none',
        fontWeight: '500',

    },
    darkTextButton: {
        color: '#fff'
    },
})

export default styles