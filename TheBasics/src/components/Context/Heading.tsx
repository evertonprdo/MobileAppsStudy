import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"
import { LevelContext } from "./LevelContext"

type HeadingProps = {
    children: React.ReactNode
}
export default function Heading({ children }: HeadingProps) {
    const level = useContext(LevelContext)
    switch (level) {
        case 0:
            throw Error('Heading must be inside a Section!')
        case 1:
            return <View style= {styles.h1}>{ children }</View>
        case 2:
            return <View style= {styles.h2}>{ children }</View>
        case 3:
            return <View style= {styles.h3}>{ children }</View>
        case 4:
            return <View style= {styles.h4}>{ children }</View>
        case 5:
            return <View style= {styles.h5}>{ children }</View>
        case 6:
            return <View style= {styles.h6}>{ children }</View>
        default:
            throw Error('Unknown level: ' + level);
    }
}

const container: StyleProp<ViewStyle> = {
    padding: 12,
    borderRadius: 7,
}
const styles = StyleSheet.create({
    h1: {
        ...container,
        backgroundColor: '#fff'
    },
    h2: {
        ...container,
        backgroundColor: '#eee'
    },
    h3: {
        ...container,
        backgroundColor: '#ddd'
    },
    h4: {
        ...container,
        backgroundColor: '#ccc'
    },
    h5: {
        ...container,
        backgroundColor: '#bbb'
    },
    h6: {
        ...container,
        backgroundColor: '#aaa'
    }
})