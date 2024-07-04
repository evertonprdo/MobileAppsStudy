import { Text, View } from "react-native"
import s from "./styles";

type NotificationProps = {
    message: string
    darkTheme?: boolean
    visibility?: boolean
}
export default function Notification({ message, darkTheme, visibility }: NotificationProps) {
    return (
        <View 
            style= {[
                s.popUpContainer,
                darkTheme && {backgroundColor: '#0a0c0d', borderWidth: 0},
                !visibility && {display: 'none'}
            ]}
        >
            <Text 
                style= {[
                    s.popupText,
                    darkTheme && {color: '#f3f3f3'}
                ]}
            >
                {message}
            </Text>
        </View>
    )
}