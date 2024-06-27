import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native"

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center',
}
const gameBorders: StyleProp<ViewStyle> ={
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
}
const gameButton: StyleProp<ViewStyle> = {
    height: 40,
    ...flexCenter,
    ...gameBorders,
    borderRadius: 5,
}
const gameText: StyleProp<TextStyle> = {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.5,
    userSelect: 'none',
}
const headerContainer: StyleProp<TextStyle> = {
    height: 50,
    ...flexCenter,
}

const styles = StyleSheet.create({
    gameText: {
        ...gameText
    },
    gameButton: {
        ...gameButton,
        minWidth: '49%',
    },

    mainContainer: {
        padding: 10,
        flex: 1,
        gap: 10,
    },

    infoContainer: {
        ...gameButton,
        ...headerContainer,
        width: '75%',
        alignSelf: 'center'
    },
    infoText: {
        ...gameText,
        fontSize: 17,
        fontWeight: 'bold'
    },

    boardPlay: {
        height: 300,
        ...flexCenter,
    },
    boardRow: {
        flexDirection: 'row',
        ...flexCenter,
    },
    square: {
        height: 77,
        width: 77,

        alignSelf: 'center',
        ...flexCenter,
        ...gameBorders,
    },
    squareText: {
        ...gameText,
        fontWeight: 'bold',
        fontSize: 30,
    },

    historyHeader: {
        ...headerContainer,
        flexDirection: 'row',
    },
    historyHeaderSwitch: {
        flexGrow: 1,
        flexDirection: 'row',
        ...flexCenter,
        gap: 12
    },
    historyHeaderButton: {
        ...gameButton,
        flexGrow: 3,
    },

    historyBoard: {
        flex: 1,
        gap: 10,

        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'stretch',
    },
})

export default styles