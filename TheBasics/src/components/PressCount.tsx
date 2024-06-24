import { useState } from "react";
import { View, Pressable, Text } from "react-native";

export default function PressCount() {
    const [ count, setCount ] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }
return(
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={handleClick} >
            <Text selectable= {false}>{`You pressed me ${count} times`}</Text>
        </Pressable>
    </View>
)}