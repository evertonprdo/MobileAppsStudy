import { View } from "react-native";

import s from "../style";
import FormLogin from "./LoginSection";
import SelectTheme from "./SelectTheme";

import { useTheme } from "../Hooks";

export default function Login() {
    const { name, setTheme } = useTheme()

    const mainContainerStyle = [
        s.mainContainer,
        name === 'dark' && s.darkMainContainer
    ]
    function handleOnChangeTheme(value:boolean) {            
        setTheme(value ? "dark" : "light")
    }

    return (
        <View style= { mainContainerStyle }>
            <FormLogin/>

            <SelectTheme
                onValueChange={ handleOnChangeTheme }
            />
        </View>
    )
}