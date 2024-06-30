import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

const borderTable: StyleProp<ViewStyle> = {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ccc',
}
const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const tableRowContainer: StyleProp<ViewStyle> ={
    flexDirection: 'row',
    alignItems: 'center',
}
const tableText: StyleProp<TextStyle> = {
    flex: 1,
    textAlign: 'center',

    paddingHorizontal: 20,
    paddingVertical: 10,
    
    color: '#333',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 0.3,

    ...borderTable,
    borderRadius: 0,

    margin: -0.5
}

const styles = StyleSheet.create({
    mainContainer: {
        ...borderTable,
        flex: 1,

        margin: 10,
        padding: 10,
        gap: 30,

        backgroundColor: '#fff'
    },

    searchContainer: {
        gap: 10,
    },
    searchInput: {
        height: 40,
        ...borderTable,
        paddingHorizontal: 10,  
    },

    switchContainer: {
        flexDirection: 'row',
        ...flexCenter,
        gap: 10
    },
    switchText: {
        color: '#333',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.3,
    },

    ProductTableContainer: {
        flex: 1,
    },

    productCategoryRowContainer: {
        ...tableRowContainer,
        justifyContent: 'center',
        zIndex: 1
    },
    rowCategoyText: {
        ...tableText,
        fontWeight: 'bold',
    },

    productRowConainer: {
        ...tableRowContainer,
    },

    tableRowText: {
        ...tableText,
    },
})

export default styles