import { useEffect, useMemo, useState } from "react";
import { RootListNamesType } from "..";
import { getScreenComponent } from "../utils";
import { View } from "react-native";

type ContentScreenProps = {
    name: RootListNamesType
}
export default function ContentScreen({ name }: ContentScreenProps) {
    const [ theme, setTheme ] = useState(false)
    const ScreenComponent = useMemo(() => {
        console.log('New Screen');
        return getScreenComponent(name)
    }, [name])

    //Teste de Renderização
    useEffect(() => {
        function onTick() {
            setTheme(!theme)
        }
        const intervalId = setInterval(onTick, 1000)
        return () => clearInterval(intervalId)
    })
    return (
        <View focusable= {theme} style= {{flex: 1}}>
            <ScreenComponent />
        </View>
    )
}