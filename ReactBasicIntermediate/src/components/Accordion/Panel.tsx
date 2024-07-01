import { Pressable, Text, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";

import styles from "./styles";

type PanelProps = {
    title: string
    children: React.ReactNode
    isActive: boolean
    onShow: () => void
    style: StyleProp<ViewStyle>
}
export default function Panel({ title, children, isActive, onShow, style }: PanelProps) {
    return (
        <View style= {[ styles.panelContainer, style ]}>
            <Text style= { styles.textTitle }>{ title }</Text>

            { isActive ? (
                children 
            ) : (
                <Pressable
                    onPress={ onShow }
                    style= {styles.showButton}
                >
                    <Text style= { styles.textButton }>Show</Text>
                </Pressable>
            )}
        </View>
    )
}