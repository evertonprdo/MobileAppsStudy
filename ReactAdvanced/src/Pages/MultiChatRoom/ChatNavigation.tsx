import { Switch, Text, View } from "react-native";

import s from "./styles";
import ChatButton from "./ChatButton";

type ChatNavigationProps = {
    theme: boolean
    onChangeTheme: (value: boolean) => void
    onChangeRoom: (roomId: string) => void
}
export default function ChatNavigation({ theme, onChangeTheme, onChangeRoom }: ChatNavigationProps) {
    return (
        <View style= {s.chatNavigation}>
            <View style= {s.navSelectContainer}>
                <ChatButton
                    text="General"
                    onPress={ () => onChangeRoom('General') }
                />
                <ChatButton
                    text="Travel"
                    onPress={ () => onChangeRoom('Travel') }
                />
                <ChatButton
                    text="Music"
                    onPress={ () => onChangeRoom('Music') }
                />
            </View>
            <View style= {s.navSwitchContainer}>
                <Switch 
                    value= {theme}
                    onValueChange={ onChangeTheme }
                />
                <Text style= { s.text }>Use dark theme</Text>
            </View>
        </View>
    )
}