import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 10
    },
    TextInput: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: 'white',
        paddingHorizontal: 10, 

        height: '73%',
        borderRadius: 5,
    },
    addContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        height: 50,
        width: '100%',
        gap: 10,
    },
    listTaskContainer: {
        flex: 1,
        width: '100%',
        gap: 12
    },
    taskContainer: {
        flex: 1
    },
    btnAll: {
        flex: 1,
    }
})

export default style