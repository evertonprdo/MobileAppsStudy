import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import s from "../styles";
import NavMenuIcon from "./NavMenuIcon";
import { useScreen } from "../../Navigation/rootContext";

type NavigationBarProps = {
    onPress: () => void
}
export default function NavigationBar({ onPress }: NavigationBarProps) {
    const ScreenName = useScreen()

    return (
        <SafeAreaView style= { s.navBarContainer }>
            <Text style= { s.textLabel }>
                { ScreenName === "HomeScreen" ? "React AdvancedDocs" : ScreenName }
            </Text>
            
            <NavMenuIcon
                onPress={ onPress }
            />
        </SafeAreaView>
    )
}