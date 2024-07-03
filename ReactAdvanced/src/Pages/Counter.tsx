import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function CounterMount() {
    const [ isShown, setIsShown ] = useState(false)
    return (
        <View>
            <Button
                title= { isShown ? "Hide form" : "Show Form" }
                onPress={ () => setIsShown(!isShown) }
            />
            { isShown && <>
                <Counter/>
            </>}
        </View>
    )
}

function Counter() {
    const [ count, setCount ] = useState(0);
    
    useEffect(() => {
        function onTick() {
            setCount(c => c + 1)
        }
        const intervalId = setInterval(onTick, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return <Text style= {{color: 'white', fontSize: 33, fontWeight: '700'}}>{count}</Text>
}