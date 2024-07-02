import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const text: StyleProp<TextStyle> = {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3
}

export const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        justifyContent: 'center',

        maxHeight: 85,
        paddingHorizontal: 15,

        backgroundColor: '#348e91'
    },
    menuButton: {

    },

    navBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textLabel: {
        ...text,
    },

    drawerContainer: {
        flex: 1,
        backgroundColor: '#00000050'
    },
    drawerContentContainer: {
        height: '100%',
        width: '73%',
        maxWidth: 444,
        backgroundColor: '#348e91',
        padding: 20,
        gap: 20,
        alignItems: 'center'
    },
    drawerTitle: {
        ...text,
        textAlign: 'center',
        fontSize: 23,
    },
    drawerLine: {
        backgroundColor: 'white',
        width: '90%',
        height: 1,
    },

    appListContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    appListButton: {
        ...flexCenter,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 7,
        height: 37,
    },
    appListText: {
        ...text,
        color: '#333',
        fontSize: 15,
        fontWeight: '600'
    }
})

export default styles