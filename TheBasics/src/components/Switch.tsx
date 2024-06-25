import { useState } from "react";
import { View, Switch, Text } from "react-native";

export default function SwitchComponent() {
    const [ isEnabled, setIsEnabled ] = useState(false)
    const toggleSwitch = () => setIsEnabled(!isEnabled)

    return(
        <View style= {{height: 300, flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20}}>
            <Switch
                onValueChange={ toggleSwitch }
                value= { isEnabled }
            />
            <Text>You { isEnabled ? 'liked' : 'did not like' } this.</Text>
        </View>
    )
}