import { Platform, StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

const isWeb = Platform.OS === 'web'

const flexCenter: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
}
const border: StyleProp<ViewStyle> = {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7
}
const text: StyleProp<TextStyle> = {
    letterSpacing: 0.3,
    color: '#333'
} 

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

        maxWidth: isWeb ? 1144 : undefined,
        width: isWeb ? '100%' : undefined,
        margin: isWeb ? 'auto' : undefined
    },
    loadingIndicator: {
        flex: 1
    },

    prodListContainer: {
        gap: 17,
        columnGap: 10,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    
    productContainer: {
        ...border,

        flex: 1,
        ...flexCenter,
        flexDirection: 'row',

        backgroundColor: '#fff',
    },

    thumbnailContainer: {
        height: '100%',
        width: isWeb ? 173 : 120,
        paddingVertical: 12,
        paddingLeft: 5
    },
    image: {
        borderRadius: 7,

        width: '100%',
        height: '100%',

        resizeMode: 'contain',
    },

    descriptionContainer: {
        flex: 1,

        paddingVertical: isWeb ? 12 : 7,
        paddingHorizontal: 12,

        gap: 10
    },
    headerContainer: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        gap: 5,
        paddingBottom: 5
    },
    subHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ratingContainer: {
        flexDirection: 'row'
    },

    titleText: {
        ...text,
        fontWeight: 'bold',
        fontSize: isWeb ? 25 : 17
    },
    priceText: {
        ...text,
        fontWeight: 'bold',
        fontSize: isWeb ? 33 : 17
    },
    categoryText: {
        fontWeight: '600',
        color: '#555'
    },
    descriptionText: {
        ...text
    },
})

export default styles